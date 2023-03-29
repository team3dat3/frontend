import TheaterController from "../../../../controller/TheaterController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater admin index.
 *  
 * @returns {undefined}
 */
export default function TheaterAdminIndex() {
    // Load and render the theater admin index template
    loadAndRender('src/view/theater/admin/index/template.html', (html) => {
        // Get theater HTML element wrapper
        const theaterWrapper = html.querySelector('#wrapper');

        // Find all theaters
        theaterController.findAll((theaterResponses) => {
            // Loop through all theater responses
            theaterResponses.forEach(theater => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/theaters/${theater.id}/edit`,
                    header: `${theater.id}`,
                    image: `https://picsum.photos/200/10${theater.id}`,
                    body: null,
                    footer: null,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                theaterWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}