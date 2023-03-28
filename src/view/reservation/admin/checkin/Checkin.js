import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation admin checkin.
 *  
 * @returns {undefined}
 */
export default function ReservationAdminCheckIn(id) {
    // Load and render the reservation admin show template
    loadAndRender('src/view/reservation/admin/checkin/template.html', (html) => {

        // Get reservation HTML element wrapper
        const reservationWrapper = html.querySelector('#wrapper');

        // Checkin reservation
        reservationController.checkin(id, (reservationResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the reservation
            element.innerHTML = `The reservation is ${reservationResponse.checkedIn ? 
                'checked in' : 'not checked in'}`;

            // Append the div element to the reservation HTML element wrapper
            reservationWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}