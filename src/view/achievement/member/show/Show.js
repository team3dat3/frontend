import AchievementController from "../../../../controller/AchievementController.js";
import { loadAndRender } from '../../../../util/Render.js';

const achievementController = new AchievementController();

/**
 * Achievement member show.
 *  
 * @returns {undefined}
 */
export default function AchievementMemberShow(id) {
    loadAndRender('src/view/achievement/member/show/template.html', (html) => {

    });
}