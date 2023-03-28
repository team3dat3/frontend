import SeatRowController from "../../../../controller/SeatRowController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seatrow controller
const seatRowController = new SeatRowController();

/**
 * SeatRow admin show.
 *  
 * @returns {undefined}
 */
export default function SeatRowAdminShow(id) {
    // Load and render the seatrow admin show template
    loadAndRender('src/view/seatrow/admin/show/template.html', (html) => {
        // Get seat HTML element wrapper
        const seatWrapper = html.querySelector('#wrapper');

        // Find seatrow
        seatRowController.find(id, (seatRowResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the seatrow
            element.innerHTML = JSON.stringify(seatRowResponse);
            // Append the div element to the seatrow HTML element wrapper
            seatRowWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}