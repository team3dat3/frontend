import MovieController from "../../../../controller/MovieController.js";
import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import TheaterController from "../../../../controller/TheaterController.js";
import ShowController from "../../../../controller/ShowController.js";
import ShowRequest from "../../../../dto/show/ShowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';
import DateTimeCreator from '../../../../components/DateTimeCreator.js';

const movieController = new MovieController();
const showDateTimeController = new ShowDateTimeController();
const theaterController = new TheaterController();
const showController = new ShowController();

let showDateTimesIds = [];

/**
 * Show admin edit.
 *  
 * @returns {undefined}
 */
export default function ShowAdminEdit(id) {
    // Load and render the show admin show template
    loadAndRender('src/view/show/admin/edit/template.html', (html) => {

        showController.find(id, (showResponse) => {
            html.querySelector('[name="movieTitle"]').value = showResponse.title;
            html.querySelector('[name="price"]').value = showResponse.price;
            html.querySelector('[name="theaterId"]').value = showResponse.theaterId;

            showDateTimesIds = showResponse.showDateTimesIds;
            
            const options = [];
            for (let i = 0; i < showResponse.showDateTimes.length; i++) {
                const option = {};
                option.id = showResponse.showDateTimesIds[i];
                option.dateTime = showResponse.showDateTimes[i];
                options.push(option);
            }

            html.querySelector('#date-time-creator').appendChild(DateTimeCreator(options, false, true));

            movieController.findAll((movieResponses) => {
                movieResponses.forEach(movie => {
                    const option = document.createElement('option');
                    option.value = movie.title;
                    option.innerText = movie.title;
                    if (movie.title === showResponse.movieTitle) {
                        option.selected = true;
                    }
                    html.querySelector('[name="movieTitle"]').appendChild(option);     
                });
            }, (error) => {
                console.log(error);
            });
    
            theaterController.findAll((theaterResponses) => {
                theaterResponses.forEach(theater => {
                    const option = document.createElement('option');
                    option.value = theater.id;
                    option.innerText = theater.name;
                    if (theater.id === showResponse.theaterId) {
                        option.selected = true;
                    }
                    html.querySelector('[name="theaterId"]').appendChild(option);
                });
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const form = html.querySelector('#show-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            // Get show date times which are not disabled
            const showDateTimes = [];
            const showDateTimesElements = html.querySelectorAll('.dateTimeInput');
            for (let i = 0; i < showDateTimesElements.length; i++) {
                const showDateTimeElement = showDateTimesElements[i];
                if (!showDateTimeElement.disabled) {
                    showDateTimes.push(showDateTimeElement.value);
                }
            }

            const showRequest = new ShowRequest(
                id,
                formData.get('movieTitle'),
                showDateTimesIds,
                showDateTimes,
                formData.get('price'),
                formData.get('theaterId')
            );

            // Update show
            showController.update(showRequest, (showResponse) => {
                window.router.navigate('/admin/shows');
                showToast('success', 'Show updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}