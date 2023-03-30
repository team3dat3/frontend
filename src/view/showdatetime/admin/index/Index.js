import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

// Create a showDateTime controller
const showDateTimeController = new ShowDateTimeController();

/**
 * Showdatetime admin index.
 *  
 * @returns {undefined}
 */
export default function ShowDateTimeAdminIndex() {
    // Load and render the showDateTime index template
    loadAndRender('src/view/showdatetime/admin/index/template.html', (html) => {
        // Get showdatetime HTML element wrapper
        const showDateTimeWrapper = html.querySelector('#wrapper');

        // Find all showsdates
        showDateTimeController.findAll((showDateTimeResponses) => {
            // Loop through all showdatetime responses
            showDateTimeResponses.forEach(showDateTime => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/showdatetimes/${showDateTime.id}/edit`,
                    header: `ID: ${showDateTime.id}`,
                    image: `https://picsum.photos/200/2${showDateTime.id % 10}`,
                    body: `<p><strong>Show ID:</strong> ${showDateTime.showId}</p>`,
                    footer: `<small>${showDateTime.showDate}</small>`,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                showDateTimeWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}