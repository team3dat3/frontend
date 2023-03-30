import SeatRowController from "../../../../controller/SeatRowController.js";
import SeatController from "../../../../controller/SeatController.js";
import SeatRequest from "../../../../dto/seat/SeatRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const seatRowController = new SeatRowController();
const seatController = new SeatController();

/**
 * Seat admin create.
 *  
 * @returns {undefined}
 */
export default function SeatAdminCreate() {
    // Load and render the seat admin create template
    loadAndRender('src/view/seat/admin/create/template.html', (html) => {

        seatRowController.findAll((seatRowResponses) => {
            seatRowResponses.forEach(seatRow => {
                const option = document.createElement('option');
                option.value = seatRow.id;
                option.innerText = seatRow.id;
                html.querySelector('[name="seatRowId"]').appendChild(option);
            });
        }, (error) => {
            console.log(error);
        });

        // find form by id within the template
        const form = html.querySelector('#seat-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();            

            // get form data
            const formData = new FormData(form);

            // Create a seat request
            const seatRequest = new SeatRequest(0, parseInt(formData.get('seatRowId')));        

            
        // Create seat
        seatController.create(seatRequest, (seatResponses) => {
            window.router.navigate('/admin/seats');
            showToast('success', `Seat saved with id: ${seatResponses.id}.`, 5000);
        }, (error) => {
            showToast('secondary', "Something went wrong. Contact support for help.", 5000);
        });
    });
}); }