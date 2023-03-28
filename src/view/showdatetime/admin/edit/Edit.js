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
export default function ShowDateTimeAdminEdit() {
    // Load and render the showdatetime admin edit template
    loadAndRender('src/view/show/admin/edit/template.html', (html) => {
        
        // find the showdatetime search input
        const id = html.querySelector('[name="search-id"]');


        // find showdatetime input elements within the template
        const showDate = html.querySelector('[name="showDate"]');
        const showId = html.querySelector('[name="showId"]');
        
        //eventlistener for submit button find
        html.querySelector('#showdate-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find showdate
        showDateTimeController.find(showDateTimeId, (showDateTimeResponse) => {
   // Set the value of the attributes elements to the value of the showdatetime response
   showDate.value = showDateTimeResponse.showDate;
   showId.value = showDateTimeResponse.showid;
             }, (error) => {
                 console.log(error);
             });
            })
        // Add event listener to showdatetime form
        html.querySelector('#show-form').addEventListener('submit', (event) => {
            event.preventDefault();


            // Create a showdatetime request
            const showDateTimeRequest = new ShowDateTimeRequest(
                showDate.value, showId.value
            );        

            // Update showdatetime
            showDateTimeController.update(showDateTimeRequest, (showDateTimeResponse) => {
                console.log(showDateTimeResponse);
            }, (error) => {
                console.log(error);
            });
        });
    });
}