import UserController from "../../../../controller/UserController.js";
import { loadAndRender } from '../../../../util/Render.js';

const userController = new UserController();

/**
 * User member show.
 *  
 * @returns {undefined}
 */
export default function UserMemberShow(username) {
    // Load and render the reservation admin show template
    loadAndRender('src/view/user/member/show/template.html', (html) => {

    });
}