import UserController from "../../../../controller/UserController.js";
import UserRequest from "../../../../dto/user/UserRequest.js";
import { loadAndRender } from "../../../../util/Render.js";

const userController = new UserController();

/**
 * User admin edit.
 * 
 * @returns {undefined}
 */

export default function UserAdminEdit(){
    loadAndRender('src/view/user/admin/create/template.html', (html) => {
        const seatWrapper = html.querySelector('#wrapper');

        html.querySelector('#user-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const userRequest = new userRequest(email, phoneNumber, reservations, achievements, couponse);

            userController.create(userRequest, (userResponses) => {
                userResponses.forEach(user => {
                    const element = document.createElement('div');
                    element.innerHTML = JSON.stringify(user);
                    userWrapper.appendChild(element);
                });
            }, (error) => {
                console.log(error);
            });
        });
    });
}