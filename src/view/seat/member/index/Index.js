import SeatController from "../../../../controller/SeatController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seat controller
const seatController = new SeatController();

/**
 * Seat member index.
 *  
 * @returns {undefined}
 */
export default function SeatMemberIndex() {
    // Load and render the seat member index template
    loadAndRender('src/view/seat/member/index/template.html', (html) => {
        // Get seat HTML element wrapper
        const seatWrapper = html.querySelector('#wrapper');

        // Find all seats
        seatController.findUserSeats((seatResponses) => {
            // Loop through all seat responses
            seatResponses.forEach(seat => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the seat
                element.innerHTML = JSON.stringify(seat);
                // Append the div element to the seat HTML element wrapper
                seatWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}