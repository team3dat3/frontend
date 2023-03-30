import ShowController from "../../../../controller/ShowController.js";
import { loadAndRender } from '../../../../util/Render.js';
import { hasRole } from "../../../../util/Authenticated.js";
import Card from '../../../../components/Card.js';
import Button from '../../../../components/Button.js';

// Create a show controller
const showController = new ShowController();

/**
 * Show index.
 *  
 * @returns {undefined}
 */
export default function ShowAnonymousIndex() {
    // Load and render the show index template
    loadAndRender('src/view/show/anonymous/index/template.html', (html) => {
        // Get show HTML element wrapper
        const showWrapper = html.querySelector('#wrapper');

        // Find all shows
        showController.findAll((showResponses) => {
            // Loop through all show responses
            showResponses.forEach(show => {
                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/shows/${show.id}/show`,
                    header: `${show.movieTitle}`,
                    image: `https://picsum.photos/200/10${show.id}`,
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

function createDateTimeBagde(dateTime) {
    return `<span class="badge primary">${dateTime}</span>`;
}