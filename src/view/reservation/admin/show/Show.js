import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation admin show.
 *  
 * @returns {undefined}
 */
export default function ReservationAdminShow(id) {
    // Load and render the reservation admin show template
    loadAndRender('src/view/reservation/admin/show/template.html');
    
    // Get reservation HTML element wrapper
    const reservationWrapper = document.getElementById('wrapper');

    // Find reservation
    reservationController.find(id, (reservationResponse) => {
        // Create a new div element
        const element = document.createElement('div');
        // Set the inner HTML of the div element to the JSON string of the reservation
        element.innerHTML = JSON.stringify(reservationResponse);
        // Append the div element to the reservation HTML element wrapper
        reservationWrapper.appendChild(element);
    }, (error) => {
        console.log(error);
    });
}