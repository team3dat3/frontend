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
    loadAndRender('src/view/reservation/admin/edit/template.html');
    
    // Find reservation
    reservationController.find(id, (reservationResponse) => {
        // Find checkin input element by name
        const checkinInputElement = document.getElementsByName('checkedIn')[0];
        // Set the value of the checkin input element to the value of the reservation response
        checkinInputElement.value = reservationResponse.checkedIn;
    }, (error) => {
        console.log(error);
    });

    // Add event listener to reservation form
    document.getElementById('reservation-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // Create a reservation request
        const reservationRequest = new ReservationRequest(
            id,
            document.getElementsByName('checkedIn')[0].value
        );        

        // Update reservation
        reservationController.update(reservationRequest, (reservationResponse) => {
            console.log(reservationResponse);
        }, (error) => {
            console.log(error);
        });
    });
}