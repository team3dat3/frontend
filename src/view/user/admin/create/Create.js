import UserController from "../../../../controller/UserController";
import UserRequest from "../../../../dto/user/UserRequest";
import { loadAndRender } from "../../../../util/Render";

const userController = new UserController();

/**
 * User admin create
 * 
 * @returns {undefined}
 */

export default function UserAdminCreate(){
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