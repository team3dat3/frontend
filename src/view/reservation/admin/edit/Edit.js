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

        // find checkin input element by name within the template
        const checkinInputElement = html.querySelector('[name="checkedIn"]');

        // Find reservation
        reservationController.find(id, (reservationResponse) => {
            // Set the value of the checkin input element to the value of the reservation response
            checkinInputElement.value = reservationResponse.checkedIn;
        }, (error) => {
            console.log(error);
        });

        // Add event listener to reservation form
        html.querySelector('#reservation-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a reservation request
            const reservationRequest = new ReservationRequest(
                id, checkinInputElement.value
            );        

            // Update reservation
            reservationController.update(reservationRequest, (reservationResponse) => {
                console.log(reservationResponse);
            }, (error) => {
                console.log(error);
            });
        });
    });
}