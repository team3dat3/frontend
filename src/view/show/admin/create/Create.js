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

/**
 * Show admin create.
 *  
 * @returns {undefined}
 */
export default function ShowAdminCreate() {
    // Load and render the show admin create template
    loadAndRender('src/view/show/admin/create/template.html', (html) => {

        html.querySelector('#date-time-creator').appendChild(DateTimeCreator(null, true, false));

        movieController.findAll((movieResponses) => {
            movieResponses.forEach(movie => {
                const option = document.createElement('option');
                option.value = movie.title;
                option.innerText = movie.title;
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
                html.querySelector('[name="theaterId"]').appendChild(option);
            });
        }, (error) => {
            console.log(error);
        });
        
        // find show form element by id within the template
        const showFormElement = html.querySelector('#show-form');

        // Add event listener to show form
        showFormElement.addEventListener('submit', (event) => {
            event.preventDefault();

            // get form data
            const formData = new FormData(showFormElement);

            // Get show date times which are not disabled
            const showDateTimes = [];
            const showDateTimesElements = html.querySelectorAll('.dateTimeInput');
            for (let i = 0; i < showDateTimesElements.length; i++) {
                const showDateTimeElement = showDateTimesElements[i];
                if (!showDateTimeElement.disabled) {
                    showDateTimes.push(showDateTimeElement.value);
                }
            }

            // check if movie title is empty
            if (formData.get('movieTitle') === '') {
                showToast('secondary', 'Movie title is required.', 5000);
                return;
            }

            // check if show date times are empty
            if (showDateTimes.length === 0) {
                showToast('secondary', 'At least one show date time is required.', 5000);
                return;
            }

            // check if price is empty
            if (formData.get('price') === '') {
                showToast('secondary', 'Price is required.', 5000);
                return;
            }

            // check if theater id is empty
            if (formData.get('theaterId') === '') {
                showToast('secondary', 'Theater is required.', 5000);
                return;
            }

            // Create a show request
            const showRequest = new ShowRequest(
                0,
                formData.get('movieTitle'),
                [], 
                showDateTimes, 
                formData.get('price'), 
                formData.get('theaterId')
            );        
            // Create show
            showController.create(showRequest, (showResponse) => {
                showToast('success', `Show saved with id: ${showResponse.id}.`, 5000);
                window.router.navigate('/admin/shows');
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}