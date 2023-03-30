import SeatRowController from "../../../../controller/SeatRowController.js";
import TheaterController from "../../../../controller/TheaterController.js";
import TheaterRequest from "../../../../dto/theater/TheaterRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const seatRowController = new SeatRowController();
const theaterController = new TheaterController();

/**
 * Theater admin create.
 *  
 * @returns {undefined}
 */
export default function TheaterAdminCreate() {
    // Load and render the theater admin create template
    loadAndRender('src/view/theater/admin/create/template.html', (html) => {

        seatRowController.findAll((seatRowResponses) => {
            seatRowResponses.forEach(seatRow => {
                if (seatRow.theaterId == 0) {
                    const option = document.createElement('option');
                    option.value = seatRow.id;
                    option.innerText = seatRow.id;
                    html.querySelector('[name="seatRowIds"]').appendChild(option);
                }
            });

            // Check if the seatRowIds select has any options
            const seatRowIdsElement = html.querySelector('[name="seatRowIds"]');
            if (seatRowIdsElement.options.length == 0) {
                showToast('secondary', "No seat rows available. Create a seat row first.", 5000);
            }
        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const form = html.querySelector('#theater-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);

            // Get all seatRowIds options
            const seatRowIds = [];
            const seatRowIdsElement = html.querySelector('[name="seatRowIds"]');
            const seatRowIdsOptions = seatRowIdsElement.options;
            for (let i = 0; i < seatRowIdsOptions.length; i++) {
                if (seatRowIdsOptions[i].selected) {
                    seatRowIds.push(seatRowIdsOptions[i].value);
                }
            }

            // Create a new theater request
            const theaterRequest = new TheaterRequest(
                0,
                formData.get('name'),
                seatRowIds
            );

            // Create theater
            theaterController.create(theaterRequest, (theaterResponse) => {
                window.router.navigate('/admin/theaters');
                showToast('success', `Theater saved with id: ${theaterResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}