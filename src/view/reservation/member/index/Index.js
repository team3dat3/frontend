import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

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

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/member/reservations/${reservation.id}/show`,
                    header: `${reservation.showMovieTitle}`,
                    image: reservation.poster ? reservation.poster : `https://picsum.photos/200/2${reservation.id % 10}`,
                    body: `<p><strong>Theater:</strong> ${reservation.theaterName}</p><p><strong>Show datetime:</strong> ${reservation.showDateTime}</p><p><strong>Seats:</strong> ${reservation.seatIds.toString().split(",").map(seat => `<span class="badge primary">${seat}</span>`).join('')}</p>`,
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

