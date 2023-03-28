import TheaterController from "../../../../controller/TheaterController.js";
import TheaterRequest from "../../../../dto/theater/TheaterRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater admin create.
 *  
 * @returns {undefined}
 */
export default function TheaterAdminCreate() {
    // Load and render the theater admin create template
    loadAndRender('src/view/theater/admin/create/template.html', (html) => {
        
        // find seatrow ids input elements by name within the template
        const seatRowIdsFromElement = html.querySelector('[name="seatRowIdsFrom"]');
        const seatRowIdsToElement = html.querySelector('[name="seatRowIdsTo"]');

        // Get theater HTML element wrapper
        const theaterWrapper = html.querySelector('#wrapper');

        html.querySelector('#theater-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a theater request
            const seatRowIdsFrom = parseInt(seatRowIdsFromElement.value);
            const seatRowIdsTo = parseInt(seatRowIdsToElement.value);
            const seatRowIds = [];
            for (let i = seatRowIdsFrom; i <= seatRowIdsTo; i++) {
                seatRowIds.push(i);
            }
            const theaterRequest = new TheaterRequest(
                id, seatRowIds, showids
            );

            
        // Create theater
        theaterController.create(theaterRequest, (theaterResponses) => {
            // Loop through all theater responses
            theaterResponses.forEach(theater => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the theater
                element.innerHTML = JSON.stringify(theater);
                // Append the div element to the theater HTML element wrapper
                theaterWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}); }