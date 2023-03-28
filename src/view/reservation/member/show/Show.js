import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation member show.
 *  
 * @returns {undefined}
 */
export default function ReservationMemberShow(id) {
    // Load and render the reservation member show template
    loadAndRender('src/view/reservation/member/show/template.html', (html) => {
        // find qrcode element within the template
        const qrcodeWrapper = html.querySelector('#qrcode');

        // Create and render a new QRCode
        new QRCode(qrcodeWrapper, `https://bergandersen.com/reservations/${id}/checkin`);
        
        // Get reservation HTML element wrapper
        const reservationWrapper = html.querySelector('#wrapper');

        // Find reservation
        reservationController.findUserReservation(id, (reservationResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the reservation
            element.innerHTML = JSON.stringify(reservationResponse);
            // Append the div element to the reservation HTML element wrapper
            reservationWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}