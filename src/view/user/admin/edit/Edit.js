import UserController from "../../../../controller/UserController.js";
import UserRequest from "../../../../dto/user/UserRequest.js";
import { loadAndRender } from "../../../../util/Render.js";
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();

/**
 * User admin edit.
 * 
 * @returns {undefined}
 */

export default function UserAdminEdit(username) {
    loadAndRender('src/view/user/admin/edit/template.html', (html) => {

        // Find user
        userController.find(username, (userResponse) => {
            // Set the value of the attributes elements to the value of the movie response
            html.querySelector('[name="username"]').value = userResponse.username;
            html.querySelector('[name="email"]').value = userResponse.email;
            html.querySelector('[name="phoneNumber"]').value = userResponse.phoneNumber;
            html.querySelector('[name="role"]').value = userResponse.roles;

        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const userForm = html.querySelector('#user-form');

        userForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(userForm);

            // Create a new user request
            const userRequest = new UserRequest(
                username,
                "",
                formData.get('email'),
                formData.get('phoneNumber'),
                [formData.get('role')]
            );

            userController.update(userRequest, (userResponse) => {
                window.router.navigate('/admin/users');
                showToast('success', 'User updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}