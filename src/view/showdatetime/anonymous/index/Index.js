import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a showDateTime controller
const showDateTimeController = new ShowDateTimeController();

/**
 * Showdatetime index.
 *  
 * @returns {undefined}
 */
export default function ShowDateTimeIndex() {
    // Load and render the showDateTime index template
    loadAndRender('src/view/showdatetime/anonymous/index/template.html', (html) => {
        // Get showdatetime HTML element wrapper
        const showDateTimeWrapper = html.querySelector('#wrapper');

        // Find all showsdates
        showDateTimeController.findAll((showDateTimeResponses) => {
            // Loop through all showdatetime responses
            showDateTimeResponses.forEach(showDateTime => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the movie
                element.innerHTML = JSON.stringify(showDateTime);
                // Append the div element to the movie HTML element wrapper
                showDateTimeWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}