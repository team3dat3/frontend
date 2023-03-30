import UserController from "../../../../controller/UserController.js";
import ShowController from "../../../../controller/ShowController.js";
import ReservationController from "../../../../controller/ReservationController.js";
import ReservationRequest from "../../../../dto/reservation/ReservationRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const showController = new ShowController();
const userController = new UserController();
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
            html.querySelector('[name="showId"]').value = reservationResponse.showId;

            // Find all users
            userController.findAll((userResponses) => {
                for (let i = 0; i < userResponses.length; i++) {
                    const user = userResponses[i];
                    if (user.username == reservationResponse.username) {
                        html.querySelector('[name="username"]').value = user.username;
                        break;
                    }
                }
            }, (error) => {
                console.log(error);
            });
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
                showToast('success', 'Reservation updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}