import UserController from "../../../../controller/UserController.js";
import {loadAndRender} from "../../../../util/Render.js";
import Card from '../../../../components/Card.js';

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
            let i = 0;
            userResponses.forEach(user => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/users/${user.username}/edit`,
                    header: `${user.email}`,
                    image: `https://picsum.photos/200/40${i}`,
                    body: null,
                    footer: null,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });
                
                userWrapper.appendChild(card);
                i++;
            });
        }, (error) => {
            console.log(error);
        });
    });
}