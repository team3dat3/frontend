import UserController from "../../../../controller/UserController.js";
import { loadAndRender } from '../../../../util/Render.js';

const userController = new UserController();

/**
 * User Member Edit.
 *  
 * @returns {undefined}
 */
export default function UserMemberEdit() {
    // Load and render the reservation admin show template
    loadAndRender('src/view/user/member/edit/template.html', (html) => {

    });
}