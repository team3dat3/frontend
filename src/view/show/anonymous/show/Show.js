import ShowController from "../../../../controller/ShowController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a show controller
const showController = new ShowController();

/**
 * Show anonymous show.
 *  
 * @returns {undefined}
 */
export default function ShowAnonymousShow() {
    // Load and render the show show template
    loadAndRender('src/view/show/anonymous/show/template.html', (html) => {
                
          // find the show search input
          const showid = html.querySelector('[name="search-id"]');
        
           // Get show HTML element wrapper
           const showWrapper = html.querySelector('#wrapper');

           html.querySelector('#show-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find show
                showController.find(showid, (showResponse) => {
               // Create a new div element
               const element = document.createElement('div');
               // Set the inner HTML of the div element to the JSON string of the movie
               element.innerHTML = JSON.stringify(showResponse);
               // Append the div element to the movie HTML element wrapper
               showWrapper.appendChild(element);
                }, (error) => {
                    console.log(error);
                });
        
     

    });
})
}