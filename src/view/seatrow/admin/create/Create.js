import SeatController from "../../../../controller/SeatController.js";
import SeatRowController from "../../../../controller/SeatRowController.js";
import SeatRowRequest from "../../../../dto/seatrow/SeatRowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const seatController = new SeatController();
const seatRowController = new SeatRowController();

/**
 * SeatRow admin create.
 *  
 * @returns {undefined}
 */
export default function SeatRowAdminCreate() {
    // Load and render the seatrow admin create template
    loadAndRender('src/view/seatrow/admin/create/template.html', (html) => {
        
        // find seat ids input elements by name within the template
        const seatIdsFromElement = html.querySelector('[name="seatIdsFrom"]');
        const seatIdsToElement = html.querySelector('[name="seatIdsTo"]');
        const theaterIdElement = html.querySelector('[name="theaterId"]');

        // Get seatrow HTML element wrapper
        const seatRowWrapper = html.querySelector('#wrapper');

        html.querySelector('#seatrow-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a seatrow request
            const seatIdsFrom = parseInt(seatIdsFromElement.value);
            const seatIdsTo = parseInt(seatIdsToElement.value);
            const seatIds = [];
            for (let i = seatIdsFrom; i <= seatIdsTo; i++) {
                seatIds.push(i);
            }
            const seatRowRequest = new SeatRowRequest(
                id, seatIds, theaterIdElement.value
            );

            
        // Create seatrow
        seatRowController.create(seatRowRequest, (seatRowResponse) => {
            window.router.navigate('/admin/seatrows');
            showToast('success', `Seat row saved with id: ${seatRowResponse.id}.`, 5000);
        }, (error) => {
            showToast('secondary', "Something went wrong. Contact support for help.", 5000);
        });
    });
}); }