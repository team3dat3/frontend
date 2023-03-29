import UserController from "../../../../controller/UserController.js"
import UserRequest from "../../../../dto/user/UserRequest.js";
import { loadAndRender } from "../../../../util/Render.js"

const userController = new UserController();

/**
 * User admin create
 * 
 * @param {undefined}
 */

export default function UserAdminCreate() {
    loadAndRender('src/view/user/admin/create/template.html', (html) => {
        // Find register form
        const registerForm = html.querySelector('#register-form');

        // Add event listener to login form
        registerForm.addEventListener('submit', (event) => {
            // Prevent default form submit
            event.preventDefault();

            // Get form data
            const formData = new FormData(registerForm);

            // Create a new user request
            const userRequest = new UserRequest(
                formData.get('username'),
                formData.get('password'),
                formData.get('email'),
                formData.get('phoneNumber'),
                [formData.get('role')]
            );

            userController.create(userRequest, (userResponse) => {
                window.router.navigate('/admin/users');
            }, (error) => {
                console.log(error);
            }); 
        });
    });
}