import UserController from "../../../../controller/UserController.js";
import UserRequest from "../../../../dto/user/UserRequest.js";
import { loadAndRender } from "../../../../util/Render.js";
import { getUsername } from "../../../../util/Authenticated.js";
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();

/**
 * User member edit.
 * 
 * @returns {undefined}
 */

export default function UserMemberEdit() {
    const username = getUsername();

    loadAndRender('src/view/user/member/edit/template.html', (html) => {

        // Find user
        userController.findAuthenticatedUser((userResponse) => {
            html.querySelector('[name="username"]').value = userResponse.username;
            html.querySelector('[name="email"]').value = userResponse.email;
            html.querySelector('[name="phoneNumber"]').value = userResponse.phoneNumber;
            html.querySelector('[name="role"]').value = userResponse.roles;
        }, (error) => {
            console.log(error);
        });

        const form = html.querySelector('#user-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const userRequest = new UserRequest(
                username,
                formData.get('password'),
                formData.get('email'),
                formData.get('phoneNumber'),
                ["MEMBER"] // overriden by backend
            );

            userController.update(userRequest, (userResponse) => {
                window.router.navigate('/profile');
                showToast('success', 'Profile updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}