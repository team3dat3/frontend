import SeatController from "../../../../controller/SeatController.js";
import SeatRequest from "../../../../dto/seat/SeatRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a seat controller
const seatController = new SeatController();

/**
 * Seat admin delete.
 *  
 * @returns {undefined}
 */
export default function SeatAdminDelete(id) {
    // Load and render the seat admin create template
    loadAndRender('src/view/seat/admin/delete/template.html', (html) => {

        const form = html.querySelector('#seat-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const seatRequest = new SeatRequest(id);

            seatController.delete(seatRequest, (seatResponses) => {
                window.router.navigate('/admin/seats');
            }, (error) => {
                console.log(error);
            });
        });
    });
}