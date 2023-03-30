import SeatController from "../../../../controller/SeatController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

const seatController = new SeatController();

/**
 * Seat admin index.
 *  
 * @returns {undefined}
 */
export default function SeatAdminIndex() {
    // Load and render the seat admin index template
    loadAndRender('src/view/seat/admin/index/template.html', (html) => {
        // Get seat HTML element wrapper
        const seatWrapper = html.querySelector('#wrapper');

        // Find all seats
        seatController.findAll((seatResponses) => {
            let i = 0;
            seatResponses.forEach(seat => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    image: `https://picsum.photos/200/2${i}`,
                    href: `#/admin/seats/${seat.id}/edit`,
                    header: `ID: ${seat.id}`,
                    body: null,
                    footer: seat.seatRowId ? `<small class="badge success">Belongs to seat row: ${seat.seatRowId}</small>` : '<small class="badge secondary">No seat row</small>',
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });
                i = (i + 1) % 10;
                seatWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}