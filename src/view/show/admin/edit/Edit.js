import ShowController from "../../../../controller/ShowController.js";
import ShowRequest from "../../../../dto/show/ShowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a show controller
const showController = new ShowController();

/**
 * Show admin edit.
 *  
 * @returns {undefined}
 */
export default function ShowAdminEdit() {
    // Load and render the show admin show template
    loadAndRender('src/view/show/admin/edit/template.html', (html) => {
        
        // find the show search input
        const id = html.querySelector('[name="search-id"]');


        // find show id input element by id within the template
        const movieTitleElement = html.querySelector('[name="movieTitle"]');
        // ReservationsIds should not be added until later.
        //const reservationsIdElement = html.querySelector('[name="reservationsId"]');
        // How to handle showDateTimeIds.
        const showDatesIdElement = html.querySelector('[name="showDatesId"]');
        const priceElement = html.querySelector('[name="price"]');
        const theaterIdElement = html.querySelector('[name="theaterId"]');
        

        html.querySelector('#show-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find show
        showController.find(id, (showResponse) => {
            // Set the value of the attributes elements to the value of the show response
            movieTitleElement.value = showResponse.movieTitle;
            showDatesIdElement.value = showResponse.showDatesids.join('\n');;
            priceElement.value = showResponse.price;
            theaterIdElement.value = showResponse.theaterid;
        }, (error) => {
            console.log(error);
        });
    })

        // Add event listener to show form
        html.querySelector('#show-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Parse the show dates ids textarea value back into an array of numbers
        const showDatesIds = showDatesIdElement.value.split('\n').map(id => parseInt(id.trim())).filter(id => !isNaN(id));


            // Create a show request
            const showRequest = new ShowRequest(
                movieTitleElement.value, showDatesIds, priceElement.value, theaterIdElement.value
            );        

            // Update show
            showController.update(showRequest, (showResponse) => {
                console.log(showResponse);
            }, (error) => {
                console.log(error);
            });
        });
    });
}