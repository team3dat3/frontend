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
                    image: `https://picsum.photos/200/2${reservation.id % 10}`,
                    body: `<p><strong>Reserved by:</strong> ${reservation.username}</p><p><strong>Show ID:</strong> ${reservation.showId}</p>`,
                    footer: reservation.checkedIn ? '<small class="badge success">Checked in</small>' : '<small class="badge secondary">Not checked in</small>',
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