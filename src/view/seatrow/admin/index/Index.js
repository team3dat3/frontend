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
                    header: `ID: ${seatrow.id}`,
                    image: `https://picsum.photos/200/14${seatrow.id}`,
                    body: null,
                    footer: null,
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