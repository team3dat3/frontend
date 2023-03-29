import TheaterController from "../../../../controller/TheaterController.js";
import TheaterRequest from "../../../../dto/theater/TheaterRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater admin create.
 *  
 * @returns {undefined}
 */
export default function TheaterAdminEdit(id) {
    // Load and render the theater admin create template
    loadAndRender('src/view/theater/admin/edit/template.html', (html) => {

        // Find theater
        theaterController.find(id, (theaterResponse) => {
            html.querySelector('[name="id"]').value = theaterResponse.id;
            html.querySelector('[name="seatRowIdsFrom"]').value = theaterResponse.seatrowids;
            html.querySelector('[name="seatRowIdsTo"]').value = theaterResponse.showids;
        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const form = html.querySelector('#theater-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(userForm);

            // Create a new theater request
            const theaterRequest = new TheaterRequest(
                formData.get('id'),
                formData.get('seatRowIdsFrom'),
                formData.get('seatRowIdsTo')
            );

            // Create theater
            theaterController.update(theaterRequest, (theaterResponse) => {
                window.router.navigate('/admin/theaters');
            }, (error) => {
                console.log(error);
            });
        });
    });
}