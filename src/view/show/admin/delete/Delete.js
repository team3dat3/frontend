import ShowController from "../../../../controller/ShowController.js";
import ShowRequest from "../../../../dto/show/ShowRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

// Create a show controller
const showController = new ShowController();

/**
 * Show admin delete.
 *  
 * @returns {undefined}
 */
export default function ShowAdminDelete() {
    // Load and render the show admin delete template
    loadAndRender('src/view/show/admin/delete/template.html', (html) => {

        // find show input element by name within the template
        const showIdElement = html.querySelector('[name="showId"]');
        
        // Create a show request
        const showRequest = new ShowRequest();

        html.querySelector('#show-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find show
        showController.find(showIdElement, (showResponse) => {
            // Set the value of the attributes elements to the value of the show response
            showRequest.id = showResponse.id;

        }, (error) => {
            console.log(error);
        });
    })
        // Add event listener to show form
        html.querySelector('#show-form').addEventListener('submit', (event) => {
            event.preventDefault();

            
            // Delete show
            showController.delete(showRequest, (showResponse) => {
                console.log(showResponse);
                showToast('success', 'Show deleted successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}