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
                    image: `https://picsum.photos/200/2${achievement.id % 10}`,
                    body: `<p><strong>Name:</strong> ${achievement.name}</p><p><strong>Description:</strong> ${achievement.description}</p><p><strong>Belongs to:</strong> ${achievement.username}</p>`,
                    footer: achievement.unlocked ? `<small class="badge success">Unlocked</small>` : '<small class="badge secondary">Locked</small>',
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