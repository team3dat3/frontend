import SeatRowController from "../../../../controller/SeatRowController.js";
import SeatController from "../../../../controller/SeatController.js";
import SeatRequest from "../../../../dto/seat/SeatRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const seatRowController = new SeatRowController();
const seatController = new SeatController();

/**
 * Seat admin edit.
 *  
 * @returns {undefined}
 */
export default function SeatAdminEdit(id) {
    // Load and render the reservation admin show template
    loadAndRender('src/view/seat/admin/edit/template.html', (html) => {

        seatController.find(id, (seatResponse) => {
            seatRowController.findAll((seatRowResponses) => {
                seatRowResponses.forEach(seatRow => {
                    const option = document.createElement('option');
                    option.value = seatRow.id;
                    option.innerText = seatRow.id;
                    if (seatRow.id == seatResponse.seatRowId) {
                        option.selected = true;
                    }
                    html.querySelector('[name="seatRowId"]').appendChild(option);
                });
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });

        const form = html.querySelector('#seat-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);

            const seatRequest = new SeatRequest(
                id, parseInt(formData.get('seatRowId'))
            );

            seatController.update(seatRequest, (seatResponse) => {
                window.router.navigate('/admin/seats');
                showToast('success', 'Seat updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}