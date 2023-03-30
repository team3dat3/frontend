import SeatRowController from "../../../../controller/SeatRowController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

// Create a seatrow controller
const seatRowController = new SeatRowController();

/**
 * SeatRow admin index.
 *  
 * @returns {undefined}
 */
export default function SeatRowAdminIndex() {
    // Load and render the seatrow admin index template
    loadAndRender('src/view/seatrow/admin/index/template.html', (html) => {
        // Get seatrow HTML element wrapper
        const seatRowWrapper = html.querySelector('#wrapper');

        // Find all seats
        seatRowController.findAll((seatRowResponses) => {
            // Loop through all seatrow responses
            seatRowResponses.forEach(seatrow => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/seatrows/${seatrow.id}/edit`,
                    image: `https://picsum.photos/200/2${seatrow.id}`,
                    header: `ID: ${seatrow.id}`,
                    body: `Number of seats: ${seatrow.seatids.length}`,
                    footer: seatrow.theaterId ? `<small class="badge success">Belongs to theater: ${seatrow.theaterName}</small>` : '<small class="badge secondary">No theater</small>',
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                seatRowWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}