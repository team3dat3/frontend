import UserController from "../../../../controller/UserController.js";
import {loadAndRender} from "../../../../util/Render.js";
import Card from '../../../../components/Card.js';

const userController = new UserController();

/**
 * User admin index
 * 
 * @returns {undefined}
 */

export default function UserAdminIndex() {
    // Load and render user admin index template
    loadAndRender('src/view/user/admin/index/template.html', (html) => {
        // Get user HTML element wrapper
        const userWrapper = html.querySelector('#wrapper');
        
        //Find all users
        userController.findAll((userResponses) => {
            //Loop for each user response
            let i = 0;
            userResponses.forEach(user => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/users/${user.username}/edit`,
                    header: `${user.username}`,
                    image: `https://picsum.photos/200/2${i}`,
                    body: `<p>E-mail: ${user.email}</p><p>Roles: ${user.roles}</p><p>Phone number: ${user.phoneNumber}</p><p>Created at: ${user.createdAt}</p>`,
                    footer: createStateBadges(user),
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });
                
                userWrapper.appendChild(card);
                i++;
            });
        }, (error) => {
            console.log(error);
        });
    });
}

function createStateBadges(user) {
    
    let badges = "";
    if (user.enabled) {
        badges += `<small class="badge success">Enabled</small>`;
    } else {
        badges += `<small class="badge secondary">Disabled</small>`;
    }
    if (user.accountNonExpired) {
        badges += `<small class="badge success">Account not expired</small>`;
    } else {
        badges += `<small class="badge secondary">Account expired</small>`;
    }
    badges += `<br><br>`;
    if (user.accountNonLocked) {
        badges += `<small class="badge success">Account not locked</small>`;
    } else {
        badges += `<small class="badge secondary">Account locked</small>`;
    }
    if (user.credentialsNonExpired) {
        badges += `<small class="badge success">Credentials not expired</small>`;
    } else {
        badges += `<small class="badge secondary">Credentials expired</small>`;
    }
    return badges;
}