import SeatRowController from "../../../../controller/SeatRowController.js";
import SeatRowRequest from "../../../../dto/seatrow/SeatRowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seatrow controller
const seatRowController = new SeatRowController();

/**
 * SeatRow admin edit.
 *  
 * @returns {undefined}
 */
export default function SeatRowAdminEdit(id) {
    // Load and render the seatrow admin create template
    loadAndRender('src/view/seatrow/admin/edit/template.html', (html) => {

        seatRowController.find(id, (seatRowResponse) => {
            html.querySelector('[name="seatIds"]').value = seatRowResponse.seatIds;
            html.querySelector('[name="theaterId"]').value = seatRowResponse.theaterId;
        }, (error) => {
            console.log(error);
        });

        // find form by id within the template
        const form = html.querySelector('#seatrow-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(userForm);

            // Create a new seatrow request
            const seatRowRequest = new SeatRowRequest(
                id,
                formData.get('seatIds'),
                formData.get('theaterId')
            );

            // Create seatrow
            seatRowController.update(seatRowRequest, (seatRowResponses) => {
                window.router.navigate('/admin/seatrows');
            }, (error) => {
                console.log(error);
            });
        });
    });
}