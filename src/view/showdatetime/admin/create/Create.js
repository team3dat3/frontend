import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import ShowDateTimeRequest from "../../../../dto/showdatetime/ShowDateTimeRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

// Create a showdatetime controller
const showDateTimeController = new ShowDateTimeController();

/**
 * Showdatetime admin create.
 *  
 * @returns {undefined}
 */
export default function ShowDateTimeAdminCreate() {
    // Load and render the showdatetime admin create template
    loadAndRender('src/view/showdatetime/admin/create/template.html', (html) => {
        
        // find showdatetime input by name within the template
        const showDate = html.querySelector('[name="showDate"]');
        const showId = html.querySelector('[name="showId"]');


        // Add event listener to showdatetime form
        html.querySelector('#show-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a showdatetime request
            const showDateTimeRequest = new ShowDateTimeRequest(
                showDate.value, 
                showId.value
            );        

            // Create showdatetime
            showDateTimeController.create(showDateTimeRequest, (showDateTimeResponse) => {
                showToast('success', `ShowDateTime saved with id: ${showDateTimeResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}