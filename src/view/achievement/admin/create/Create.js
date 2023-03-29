import AchievementController from "../../../../controller/AchievementController.js"
import AchievementRequest from "../../../../dto/user/AchievementRequest.js";
import { loadAndRender } from "../../../../util/Render.js"

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
            }, (error) => {
                console.log(error);
            }); 
        });
    });
}