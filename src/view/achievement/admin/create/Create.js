import UserController from "../../../../controller/UserController.js";
import AchievementController from "../../../../controller/AchievementController.js"
import AchievementRequest from "../../../../dto/achievement/AchievementRequest.js";
import { loadAndRender } from "../../../../util/Render.js"
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();
const achievementController = new AchievementController();

/**
 * Achievement admin create
 * 
 * @param {undefined}
 */
export default function AchievementAdminCreate() {
    loadAndRender('src/view/achievement/admin/create/template.html', (html) => {

        userController.findAll((userResponses) => {
            userResponses.forEach(user => {
                const option = document.createElement('option');
                option.value = user.username;
                option.innerText = user.username;
                html.querySelector('[name="username"]').appendChild(option);
            });
        }, (error) => {
            console.log(error);
        });

        const form = html.querySelector('#achievement-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            if (formData.get('name') == '') {
                showToast('secondary', "Achievement name is required.", 5000);
                return;
            }

            if (formData.get('description') == '') {
                showToast('secondary', "Achievement description is required.", 5000);
                return;
            }

            if (formData.get('username') == '') {
                showToast('secondary', "Achievement username is required.", 5000);
                return;
            }

            const achievementRequest = new AchievementRequest(
                0,
                formData.get('username'),
                formData.get('name'),
                formData.get('description'),
                formData.get('unlocked') ? true : false,
            );

            achievementController.create(achievementRequest, (achievementResponse) => {
                window.router.navigate('/admin/achievements');
                showToast('success', `Achievement saved with id: ${achievementResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            }); 
        });
    });
}