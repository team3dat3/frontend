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
                    header: `ID: ${show.id}`,
                    image: `https://picsum.photos/200/10${show.id}`,
                    body: null,
                    footer: null,
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

        if (hasRole("ADMIN")) {
            const div = document.createElement("div");
            const button = new Button({
                type: "success",
                text: "Create",
                href: "/show/create",
                animation: {
                    onmouseenter: {
                        type: "jello",
                        duration: 1000
                    },
                }
            });

            button.onclick = () => {
                window.router.navigate("admin/shows/create");
            };

            div.appendChild(button);
            html.querySelector(".page-header").appendChild(div);
        }
    });
}