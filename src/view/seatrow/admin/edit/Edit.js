import SeatController from "../../../../controller/SeatController.js";
import TheaterController from "../../../../controller/TheaterController.js";
import SeatRowController from "../../../../controller/SeatRowController.js";
import SeatRowRequest from "../../../../dto/seatrow/SeatRowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const theaterController = new TheaterController();
const seatController = new SeatController();
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
            // Add seat options
            seatController.findAll((seatResponses) => {
                seatResponses.forEach(seat => {
                    if (seat.seatRowId == id || seat.seatRowId == 0) {
                        const option = document.createElement('option');
                        option.value = seat.id;
                        option.innerText = seat.id;
                        if (seat.seatRowId == id) {
                            option.selected = true;
                        }
                        html.querySelector('[name="seatIds"]').appendChild(option);
                    }
                });
            }, (error) => {
                console.log(error);
            });

            // Add theater options
            theaterController.findAll((theaterResponses) => {
                theaterResponses.forEach(theater => {
                    const option = document.createElement('option');
                    option.value = theater.id;
                    option.innerText = theater.name;
                    if (theater.id == seatRowResponse.theaterId) {
                        option.selected = true;
                    }
                    html.querySelector('[name="theaterId"]').appendChild(option);
                });
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });

        // find form by id within the template
        const form = html.querySelector('#seatrow-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);

            // Get all seatRowIds options
            const seatIds = [];
            const seatIdsElement = html.querySelector('[name="seatIds"]');
            const seatIdsOptions = seatIdsElement.options;
            for (let i = 0; i < seatIdsOptions.length; i++) {
                if (seatIdsOptions[i].selected) {
                    seatIds.push(seatIdsOptions[i].value);
                }
            }

            // Create a new seatrow request
            const seatRowRequest = new SeatRowRequest(
                id,
                seatIds,
                parseInt(formData.get('theaterId'))
            );

            // Create seatrow
            seatRowController.update(seatRowRequest, (seatRowResponses) => {
                window.router.navigate('/admin/seatrows');
                showToast('success', 'Seat row updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}