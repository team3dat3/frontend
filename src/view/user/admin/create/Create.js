import UserController from "../../../../controller/UserController.js"
import UserRequest from "../../../../dto/user/UserRequest.js";
import { loadAndRender } from "../../../../util/Render.js"
import { showToast } from '../../../../components/Toast.js';

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
                [formData.get('role')],
                formData.get('accountNonExpired'),
                formData.get('accountNonLocked'),
                formData.get('credentialsNonExpired'),
                formData.get('enabled')
            );

            userController.create(userRequest, (userResponse) => {
                window.router.navigate('/admin/users');
                showToast('success', `User saved with username: ${userResponse.username}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            }); 
        });
    });
}