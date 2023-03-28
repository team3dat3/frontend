import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation member index.
 *  
 * @returns {undefined}
 */
export default function ReservationMemberIndex() {
    // Load and render the reservation member index template
    loadAndRender('src/view/reservation/member/index/template.html', (html) => {
        // Get reservation HTML element wrapper
        const reservationWrapper = html.querySelector('#wrapper');

        // Find all reservations
        reservationController.findUserReservations((reservationResponses) => {
            // Loop through all reservation responses
            reservationResponses.forEach(reservation => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the reservation
                element.innerHTML = JSON.stringify(reservation);
                // Append the div element to the reservation HTML element wrapper
                reservationWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}