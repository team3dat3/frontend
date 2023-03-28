import "./config/Config.js"; // Load the config
import { loadHtml, setRoot } from "./util/Render.js";

// Reservation pages
import ReservationAdminIndex from "./view/reservation/admin/index/Index.js";
import ReservationAdminShow from "./view/reservation/admin/show/Show.js";
import ReservationAdminEdit from "./view/reservation/admin/edit/Edit.js";
import ReservationAdminCheckIn from "./view/reservation/admin/checkin/CheckIn.js";
import ReservationMemberShow from "./view/reservation/member/show/Show.js";
import ReservationMemberIndex from "./view/reservation/member/index/Index.js";

/**
 * Load and initialize the layout.
 * 
 * @type {HTMLElement}
 * @private
 */
await loadHtml("./src/view/layout/layout.html").then((html) => {
    // Add the layout to the root element
    document.getElementById("root").appendChild(html);
    document.getElementById("root").appendChild(card);

    // Set the render's root element
    setRoot(html.querySelector('#main-content'));
});

/* Insert Navigo router here instead of the test code below
// Test the render function
ReservationMemberShow(1);
setTimeout(() => {
    ReservationMemberIndex();
    setTimeout(() => {
        ReservationAdminIndex();
        setTimeout(() => {
            ReservationAdminEdit();
            setTimeout(() => {
                ReservationAdminShow(1);
            }, 5000);
        }, 5000);
    }, 5000);
}, 5000);
*/
