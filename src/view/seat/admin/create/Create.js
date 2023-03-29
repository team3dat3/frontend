import SeatController from "../../../../controller/SeatController.js";
import SeatRequest from "../../../../dto/seat/SeatRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

// Create a seat controller
const seatController = new SeatController();

/**
 * Seat admin create.
 *  
 * @returns {undefined}
 */
export default function SeatAdminCreate() {
    // Load and render the seat admin create template
    loadAndRender('src/view/seat/admin/create/template.html', (html) => {
        // Get seat HTML element wrapper
        const seatWrapper = html.querySelector('#wrapper');

        html.querySelector('#seat-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a seat request
            const seatRequest = new SeatRequest(0, 0, 0);        

            
        // Create seat
        seatController.create(seatRequest, (seatResponses) => {
            window.router.navigate('/admin/seats');
            showToast('success', `Seat saved with id: ${seatResponses.id}.`, 5000);
        }, (error) => {
            showToast('secondary', "Something went wrong. Contact support for help.", 5000);
        });
    });
}); }