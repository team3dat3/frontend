import UserController from "../../../../controller/UserController.js";
import { loadAndRender } from '../../../../util/Render.js';
import { getUsername } from "../../../../util/Authenticated.js";

const userController = new UserController();

/**
 * User member show.
 *  
 * @returns {undefined}
 */
export default function UserMemberShow() {
    const username = getUsername();

    loadAndRender('src/view/user/member/show/template.html', (html) => {
        html.querySelector('#username').innerText = username;
    });
}