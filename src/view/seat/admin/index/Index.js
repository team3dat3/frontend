import SeatController from "../../../../controller/SeatController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

// Create a seat controller
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
            // Loop through all seat responses
            seatResponses.forEach(seat => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/seats/${seat.id}/delete`,
                    header: `ID: ${seat.id}`,
                    image: `https://picsum.photos/200/18${seat.id-1}`,
                    body: null,
                    footer: null,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });
                
                seatWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}