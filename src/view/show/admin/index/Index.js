import ShowController from "../../../../controller/ShowController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';
import Button from '../../../../components/Button.js';

// Create a show controller
const showController = new ShowController();

/**
 * Admin Show index.
 *  
 * @returns {undefined}
 */
export default function ShowAdminIndex() {
    // Load and render the show index template
    loadAndRender('src/view/show/admin/index/template.html', (html) => {
        // Get show HTML element wrapper
        const showWrapper = html.querySelector('#wrapper');

        // Find all shows
        showController.findAll((showResponses) => {
            // Loop through all show responses
            showResponses.forEach(show => {
                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/shows/${show.id}/edit`,
                    header: `${show.movieTitle}`,
                    image: show.poster ? show.poster : `https://picsum.photos/200/10${show.id}`,
                    body: `<p><strong>Price:</strong> ${show.price}DKK</p><p><strong>Theater:</strong> ${show.theaterName}</p>`,
                    footer: show.showDateTimes.map(showDateTime => `<span class="badge primary">${showDateTime}</span>`).join(''),
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                showWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}
