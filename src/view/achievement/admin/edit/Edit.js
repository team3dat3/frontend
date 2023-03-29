import UserController from "../../../../controller/UserController.js";
import AchievementController from "../../../../controller/AchievementController.js"
import AchievementRequest from "../../../../dto/achievement/AchievementRequest.js";
import { loadAndRender } from "../../../../util/Render.js";
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();
const achievementController = new AchievementController();

/**
 * Achievement admin edit.
 * 
 * @returns {undefined}
 */
export default function AchievementAdminEdit(id) {
    loadAndRender('src/view/achievement/admin/edit/template.html', (html) => {

        achievementController.find(id, (achievementResponse) => {
            html.querySelector('[name="name"]').value = achievementResponse.name;
            html.querySelector('[name="description"]').value = achievementResponse.description;
            html.querySelector('[name="unlocked"]').checked = achievementResponse.unlocked;
            userController.findAll((userResponses) => {
                userResponses.forEach(user => {
                    const option = document.createElement('option');
                    option.value = user.username;
                    option.innerText = user.username;
                    if (user.id == achievementResponse.username) {
                        option.selected = true;
                    }
                    html.querySelector('[name="username"]').appendChild(option);
                });
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const form = html.querySelector('#achievement-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(userForm);
            const achievementRequest = new AchievementRequest(
                id,
                formData.get('missing')
            );

            achievementController.update(achievementRequest, (achievementResponse) => {
                window.router.navigate('/admin/achievements');
                showToast('success', 'Achievement updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}