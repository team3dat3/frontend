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
 * SeatRow admin create.
 *  
 * @returns {undefined}
 */
export default function SeatRowAdminCreate() {
    // Load and render the seatrow admin create template
    loadAndRender('src/view/seatrow/admin/create/template.html', (html) => {

        // Add seat options
        seatController.findAll((seatResponses) => {
            seatResponses.forEach(seat => {
                if (seat.seatRowId == 0) {
                    const option = document.createElement('option');
                    option.value = seat.id;
                    option.innerText = seat.id;
                    html.querySelector('[name="seatIds"]').appendChild(option);
                }
            });

            // Check if the seatRowIds select has any options
            const seatIdsElement = html.querySelector('[name="seatIds"]');
            if (seatIdsElement.options.length == 0) {
                showToast('secondary', "No seats available. Create a seat first.", 5000);
            }
        }, (error) => {
            console.log(error);
        });

        

        // Add theater options
        theaterController.findAll((theaterResponses) => {
            theaterResponses.forEach(theater => {
                const option = document.createElement('option');
                option.value = theater.id;
                option.innerText = theater.name;
                html.querySelector('[name="theaterId"]').appendChild(option);
            });
        }, (error) => {
            console.log(error);
        });

        // find form by id within the template
        const form = html.querySelector('#seatrow-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // get form data
            const formData = new FormData(form);

            // Get all seatRowIds options
            const seatIds = [];
            const seatIdsElement = html.querySelector('[name="seatIds"]');
            const seatIdsOptions = seatIdsElement.options;
            for (let i = 0; i < seatIdsOptions.length; i++) {
                if (seatIdsOptions[i].selected) {
                    seatIds.push(parseInt(seatIdsOptions[i].value));
                }
            }

            const seatRowRequest = new SeatRowRequest(0, seatIds, parseInt(formData.get('theaterId')));

            // Create seatrow
            seatRowController.create(seatRowRequest, (seatRowResponse) => {
                window.router.navigate('/admin/seatrows');
                showToast('success', `Seat row saved with id: ${seatRowResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}