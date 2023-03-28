import SeatController from "../../../../controller/SeatController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seat controller
const seatController = new SeatController();

/**
 * Seat admin show.
 *  
 * @returns {undefined}
 */
export default function SeatAdminShow(id) {
    // Load and render the seat admin show template
    loadAndRender('src/view/seat/admin/show/template.html', (html) => {
        // Get seat HTML element wrapper
        const seatWrapper = html.querySelector('#wrapper');

        // Find seat
        seatController.find(id, (seatResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the seat
            element.innerHTML = JSON.stringify(seatResponse);
            // Append the div element to the seat HTML element wrapper
            seatWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}