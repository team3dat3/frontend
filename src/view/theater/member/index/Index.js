import TheaterController from "../../../../controller/TheaterController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater member index.
 *  
 * @returns {undefined}
 */
export default function TheaterMemberIndex() {
    // Load and render the theater member index template
    loadAndRender('src/view/theater/member/index/template.html', (html) => {
        // Get theater HTML element wrapper
        const theaterWrapper = html.querySelector('#wrapper');

        // Find all theaters
        theaterController.findUserTheaters((theaterResponses) => {
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
}