import AchievementController from "../../../../controller/AchievementController.js"
import AchievementRequest from "../../../../dto/user/AchievementRequest.js";
import { loadAndRender } from "../../../../util/Render.js";

const achievementController = new AchievementController();

/**
 * Achievement admin edit.
 * 
 * @returns {undefined}
 */

export default function AchievementAdminEdit(id) {
    loadAndRender('src/view/achievement/admin/edit/template.html', (html) => {

        achievementController.find(id, (achievementResponse) => {
            html.querySelector('[name="missing"]').value = userResponse.missing;
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
            }, (error) => {
                console.log(error);
            });
        });
    });
}