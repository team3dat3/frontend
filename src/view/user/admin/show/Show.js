import UserController from "../../../../controller/UserController.js"
import { loadAndRender } from "../../../../util/Render.js"

const userController = new UserController();

/**
 * User admin show
 * 
 * @param {undefined}
 */

export default function UserAdminShow(username){
    loadAndRender('src/view/user/admin/show/template.html', (html) => {
        const userWrapper = html.querySelector('#wrapper');

        // Find user
        userController.find(username, (userResponse) => {
            const element = document.createElement('div');
            element.innerHTML = JSON.stringify(userResponse);
            userWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}