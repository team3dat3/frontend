import SeatRowController from "../../../../controller/SeatRowController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seatrow controller
const seatRowController = new SeatRowController();

/**
 * SeatRow member show.
 *  
 * @returns {undefined}
 */
export default function SeatRowMemberShow(id) {
    // Load and render the seatrow member show template
    loadAndRender('src/view/seatrow/member/show/template.html', (html) => {
        // Get seatrow HTML element wrapper
        const seatRowWrapper = html.querySelector('#wrapper');

        // Find seatrow
        seatRowController.findUserSeatRow(id, (seatRowResponse) => {
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