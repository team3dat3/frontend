import UserController from "../../../../controller/UserController.js";
import {loadAndRender} from "../../../../util/Render.js";

const userController = new UserController();

/**
 * User admin index
 * 
 * @returns {undefined}
 */

export default function UserAdminIndex() {
    // Load and render user admin index template
    loadAndRender('src/view/user/admin/index/template.html', (html) => {
        // Get user HTML element wrapper
        const userWrapper = html.querySelector('#wrapper');
        
        //Find all users
        userController.findAll((userResponses) => {
            //Loop for each user response
            userResponses.forEach(user => {
                // Create new div element
                const element = document.createElement('div');
                // Set inner HTML of div element to the JSON string of given reservation
                element.innerHTML = JSON.stringify(user);
                // Append div element to the reservation HTML element wrapper
                userWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}