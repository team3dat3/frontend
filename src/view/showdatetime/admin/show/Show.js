import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a showDateTime controller
const showDateTimeController = new ShowDateTimeController();

/**
 * Showdatetime admin show.
 *  
 * @returns {undefined}
 */
export default function ShowDateTimeAdminShow() {
    // Load and render the showdatetime show template
    loadAndRender('src/view/showdatetime/admin/show/template.html', (html) => {
                
          // find the showdatetime search input
          const showDateTimeId = html.querySelector('[name="search-id"]');
        
           // Get show HTML element wrapper
           const showDateTimeWrapper = html.querySelector('#wrapper');

           //eventlistener for submit button
           html.querySelector('#showdate-search').addEventListener('submit', (event) => {
            event.preventDefault();
            // Find showdate
            showDateTimeController.find(showDateTimeId, (showDateTimeResponse) => {
               // Create a new div element
               const element = document.createElement('div');
               // Set the inner HTML of the div element to the JSON string of the movie
               element.innerHTML = JSON.stringify(showDateTimeResponse);
               // Append the div element to the movie HTML element wrapper
               showDateTimeWrapper.appendChild(element);
                }, (error) => {
                    console.log(error);
                });
            })
     

    });
}