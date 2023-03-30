import UserController from "../../../../controller/UserController.js"
import UserRequest from "../../../../dto/user/UserRequest.js";
import { loadAndRender } from "../../../../util/Render.js"
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();

/**
 * User anonymous create
 * 
 * @param {undefined}
 */

export default function UserAnonymousCreate() {
    loadAndRender('src/view/user/anonymous/create/template.html', (html) => {
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
                ["MEMBER"], // Overriden by server
                true, // Overriden by server
                true, // Overriden by server
                true, // Overriden by server
                true // Overriden by server
            );

            userController.register(userRequest, (userResponse) => {
                showToast('success', 'Signup successful.', 5000);
                window.router.navigate('/login');
            }, (error) => {
                showToast('secondary', "The credentials were wrong.", 5000);
            }); 
        });
    });
}