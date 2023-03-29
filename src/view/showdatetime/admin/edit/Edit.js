import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import ShowDateTimeRequest from "../../../../dto/showdatetime/ShowDateTimeRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a showdatetime controller
const showDateTimeController = new ShowDateTimeController();

/**
 * Showdatetime admin edit.
 *  
 * @returns {undefined}
 */
export default function ShowDateTimeAdminEdit(id) {
    // Load and render the showdatetime admin edit template
    loadAndRender('src/view/showdatetime/admin/edit/template.html', (html) => {

        showDateTimeController.find(id, (showDateTimeResponse) => {
            html.querySelector('[name="showDate"]').value = showDateTimeResponse.showDate;
            html.querySelector('[name="showId"]').value = showDateTimeResponse.showId;
        }, (error) => {
            console.log(error);
        });

        const form = html.querySelector('#showdatetime-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);

            // Create a showdatetime request
            const showDateTimeRequest = new ShowDateTimeRequest(
                id,
                formData.get('showDate'),
                formData.get('showId')
            );

            showDateTimeController.update(showDateTimeRequest, (showDateTimeResponse) => {
                window.router.navigate('/admin/showdatetimes');
            }, (error) => {
                console.log(error);
            });
        });
    });
}