import TheaterController from "../../../../controller/TheaterController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater member show.
 *  
 * @returns {undefined}
 */
export default function TheaterMemberShow(id) {
    // Load and render the theater member show template
    loadAndRender('src/view/theater/member/show/template.html', (html) => {
        // Get theater HTML element wrapper
        const theaterWrapper = html.querySelector('#wrapper');

        // Find theater
        theaterController.findUserTheater(id, (theaterResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the theater
            element.innerHTML = JSON.stringify(theaterResponse);
            // Append the div element to the theater HTML element wrapper
            theaterWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}