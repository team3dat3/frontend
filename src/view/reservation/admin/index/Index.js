import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation admin index.
 *  
 * @returns {undefined}
 */
export default function ReservationAdminIndex() {
    // Load and render the reservation admin index template
    loadAndRender('src/view/reservation/admin/index/template.html', (html) => {
        // Get reservation HTML element wrapper
        const reservationWrapper = html.querySelector('#wrapper');

        // Find all reservations
        reservationController.findAll((reservationResponses) => {
            // Loop through all reservation responses
            reservationResponses.forEach(reservation => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/reservations/${reservation.id}/edit`,
                    header: `ID: ${reservation.id}`,
                    image: `https://picsum.photos/200/12${reservation.id}`,
                    body: null,
                    footer: `${reservation.checkedIn ? 'Checked in' : 'Not checked in'}`,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                reservationWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}