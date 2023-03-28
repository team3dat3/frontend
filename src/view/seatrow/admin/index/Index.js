import SeatRowController from "../../../../controller/SeatRowController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seatrow controller
const seatRowController = new SeatRowController();

/**
 * SeatRow admin index.
 *  
 * @returns {undefined}
 */
export default function SeatRowAdminIndex() {
    // Load and render the seatrow admin index template
    loadAndRender('src/view/seatrow/admin/index/template.html', (html) => {
        // Get seatrow HTML element wrapper
        const seatRowWrapper = html.querySelector('#wrapper');

        // Find all seats
        seatRowController.findAll((seatRowResponses) => {
            // Loop through all seatrow responses
            seatRowResponses.forEach(seatrow => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the seatrow
                element.innerHTML = JSON.stringify(seatrow);
                // Append the div element to the seatrow HTML element wrapper
                seatRowWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}