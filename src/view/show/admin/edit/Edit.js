import ShowController from "../../../../controller/ShowController.js";
import ShowRequest from "../../../../dto/show/ShowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

// Create a show controller
const showController = new ShowController();

/**
 * Show admin edit.
 *  
 * @returns {undefined}
 */
export default function ShowAdminEdit(id) {
    // Load and render the show admin show template
    loadAndRender('src/view/show/admin/edit/template.html', (html) => {

        showController.find(id, (showResponse) => {
            html.querySelector('[name="movieTitle"]').value = showResponse.title;
            html.querySelector('[name="showDateTimeIds"]').value = showResponse.showDateTimeIds;
            html.querySelector('[name="price"]').value = showResponse.price;
            html.querySelector('[name="theaterId"]').value = showResponse.theaterId;
        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const form = html.querySelector('#show-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            const showRequest = new ShowRequest(
                id,
                formData.get('movieTitle'),
                formData.get('showDateTimeIds'),
                formData.get('price'),
                formData.get('theaterId')
            );

            // Update show
            showController.update(showRequest, (showResponse) => {
                window.router.navigate('/shows');
                showToast('success', 'Show updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}