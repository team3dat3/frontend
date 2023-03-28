import UserController from "../../../../controller/UserController.js"
import { loadAndRender } from "../../../../util/Render.js"

const userController = new UserController();

/**
 * User anonymous create
 * 
 * @param {undefined}
 */

export default function UserAnonymousCreate() {
    loadAndRender('src/view/user/anonymous/create/template.html', (html) => {
        
    });
}