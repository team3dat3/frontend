import AchievementController from "../../../../controller/AchievementController.js"
import AchievementRequest from "../../../../dto/achievement/AchievementRequest.js";
import { loadAndRender } from "../../../../util/Render.js"
import { showToast } from '../../../../components/Toast.js';

const achievementController = new AchievementController();

/**
 * Achievement admin create
 * 
 * @param {undefined}
 */

export default function AchievementAdminCreate() {
    loadAndRender('src/view/achievement/admin/create/template.html', (html) => {

        const form = html.querySelector('#achievement-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const achievementRequest = new AchievementRequest(
                formData.get('missing')
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