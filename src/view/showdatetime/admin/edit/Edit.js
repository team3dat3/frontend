import ShowController from "../../../../controller/ShowController.js";
import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import ShowDateTimeRequest from "../../../../dto/showdatetime/ShowDateTimeRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const showController = new ShowController();
const showDateTimeController = new ShowDateTimeController();

/**
 * The id of the date time's show.
 * 
 * @type {number}
 * @private
 */
let showId = null;

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
            showId = showDateTimeResponse.showId;

            showController.find(showDateTimeResponse.showId, (showResponse) => {
                html.querySelector('[name="showMovieTitle"]').value = showResponse.movieTitle;
            }, (error) => {
                console.log(error);
            });
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
                showId
            );

            showDateTimeController.update(showDateTimeRequest, (showDateTimeResponse) => {
                window.router.navigate('/admin/showdatetimes');
                showToast('success', 'ShowDateTime updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}