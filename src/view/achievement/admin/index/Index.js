import AchievementController from "../../../../controller/AchievementController.js"
import {loadAndRender} from "../../../../util/Render.js";
import Card from '../../../../components/Card.js';

const achievementController = new AchievementController();

/**
 * Achievement admin index
 * 
 * @returns {undefined}
 */

export default function AchievementAdminIndex() {
    loadAndRender('src/view/achievement/admin/index/template.html', (html) => {
        const wrapper = html.querySelector('#wrapper');
        
        achievementController.findAll((achievementResponses) => {
            achievementResponses.forEach(achievement => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/achievements/${achievement.id}/edit`,
                    header: `ID: ${achievement.id}`,
                    image: `https://picsum.photos/200/40${achievement.id}`,
                    body: null,
                    footer: null,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });
                
                wrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error);
        });
    });
}