import SeatController from "../../../../controller/SeatController.js";
import SeatRequest from "../../../../dto/seat/SeatRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seat controller
const seatController = new SeatController();

/**
 * Seat admin create.
 *  
 * @returns {undefined}
 */
export default function SeatAdminCreate() {
    // Load and render the seat admin create template
    loadAndRender('src/view/seat/admin/create/template.html', (html) => {
        // Get seat HTML element wrapper
        const seatWrapper = html.querySelector('#wrapper');

        html.querySelector('#seat-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a seat request
            const seatRequest = new SeatRequest(
                id, reservationids, seatrowid
            );        

            
        // Create seat
        seatController.create(seatRequest, (seatResponses) => {
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
}); }