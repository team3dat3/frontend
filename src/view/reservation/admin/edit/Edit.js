import ReservationController from "../../../../controller/ReservationController.js";
import ReservationRequest from "../../../../dto/reservation/ReservationRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation admin edit.
 *  
 * @returns {undefined}
 */
export default function ReservationAdminEdit(id) {
    // Load and render the reservation admin show template
    loadAndRender('src/view/reservation/admin/edit/template.html', (html) => {

        // Find reservation
        reservationController.find(id, (reservationResponse) => {
            // Set the value of the checkin input element to the value of the reservation response
            html.querySelector('[name="checkedIn"]').checked = reservationResponse.checkedIn ? true : false;
        }, (error) => {
            console.log(error);
        });

        // Find the form element by id within the template
        const form = html.querySelector('#reservation-form');

        // Add event listener to reservation form
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a reservation request
            const reservationRequest = new ReservationRequest(
                id, html.querySelector('[name="checkedIn"]').checked
            );        

            // Update reservation
            reservationController.update(reservationRequest, (reservationResponse) => {
                window.router.navigate('/admin/reservations');
            }, (error) => {
                console.log(error);
            });
        });
    });
}