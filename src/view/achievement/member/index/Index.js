import AchievementController from "../../../../controller/AchievementController.js"
import {loadAndRender} from "../../../../util/Render.js";
import Card from '../../../../components/Card.js';

const achievementController = new AchievementController();

/**
 * Member admin index
 * 
 * @returns {undefined}
 */

export default function AchievementMemberIndex() {
    loadAndRender('src/view/achievement/member/index/template.html', (html) => {
        const wrapper = html.querySelector('#wrapper');
        
        achievementController.findUserAchievements((achievementResponses) => {
            achievementResponses.forEach(achievement => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    header: `${achievement.name}`,
                    image: `https://picsum.photos/200/2${achievement.id % 10}`,
                    body: `${achievement.description}`,
                    footer: achievement.unlocked ? `<small class="badge success">Unlocked</small>` : `<small class="badge secondary">Locked</small>`,
                });
                
                wrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}