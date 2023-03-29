import MovieController from "../../../../controller/MovieController.js";
import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import TheaterController from "../../../../controller/TheaterController.js";
import ShowController from "../../../../controller/ShowController.js";
import ShowRequest from "../../../../dto/show/ShowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

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

        
        
        // find show title input element by name within the template
        const movieTitleElement = html.querySelector('[name="movieTitle"]');
        // ReservationsIds should not be added until later.
        //const reservationsIdElement = html.querySelector('[name="reservationsId"]');
        // How to handle showDateTimeIds? Below is chatgpts answer
        const showDatesIdElement = html.querySelector("showDateTimeIds")[0];
        const priceElement = html.querySelector('[name="price"]');
        const theaterIdElement = html.querySelector('[name="theaterId"]');

        
        const showDateTimeIds = showDateTimeIdsInput.value.split("\n").map(id => parseInt(id.trim())).filter(id => !isNaN(id));


        // Add event listener to show form
        html.querySelector('#show-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a show request
            const showRequest = new ShowRequest(
                movieTitleElement.value, 
                //reservationsIdElement.value, 
                showDateTimeIds.value, 
                priceElement.value, 
                theaterIdElement.value
            );        

            // Create show
            showController.create(showRequest, (showResponse) => {
                showToast('success', `Show saved with id: ${showResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}