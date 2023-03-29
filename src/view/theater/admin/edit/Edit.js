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
export default function TheaterAdminEdit(id) {
    // Load and render the theater admin create template
    loadAndRender('src/view/theater/admin/edit/template.html', (html) => {

        

        // Find theater
        theaterController.find(id, (theaterResponse) => {
            html.querySelector('[name="name"]').value = theaterResponse.name;

            // Find seat rows
            seatRowController.findAll((seatRowResponses) => {
                seatRowResponses.forEach(seatRow => {
                    if (seatRow.theaterId == id || seatRow.theaterId == 0) {
                        appendOption(html.querySelector('[name="seatRowIds"]'), seatRow.id, seatRow.id, seatRow.theaterId == id);
                    }
                });
            }, (error) => {
                console.log(error);
            });
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
                id,
                formData.get('name'),
                seatRowIds
            );

            // Create theater
            theaterController.update(theaterRequest, (theaterResponse) => {
                window.router.navigate('/admin/theaters');
                showToast('success', 'Theater updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}

function appendOption(select, value, text, selected = false) {
    const option = document.createElement('option');
    option.value = value;
    option.innerText = text;
    option.selected = selected;
    select.appendChild(option);
}