import "./config/Config.js"; // Load the config
import { loadHtml, setRoot } from "./util/Render.js";
import "./util/navigo_EditedByLars.js";


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

    // Set the render's root element
    setRoot(html.querySelector('#main-content'));
});

window.addEventListener("load", async () => {

    const router = new Navigo("/", { hash: true });
    window.router = router
    
    let path = window.location.hash
    if (path == "") { //Do this only for hash
        path = "#/"
        window.history.pushState({}, path, window.location.href + path);
    }

    router
        .hooks({
            before(done, match) {
                //setActiveLink("menu", match.url)
                done()
            }
        })
        .on({
            "/": () => render([link, button, button2]),
            "/admin/reservations": ReservationAdminIndex,
            "/admin/reservations/:id": ReservationAdminShow,
            "/admin/reservations/:id/edit": ReservationAdminEdit,
            "/admin/reservations/:id/checkin": ReservationAdminCheckIn,
            "/member/reservations": ReservationMemberIndex,
            "/member/reservations/:id": ReservationMemberShow,
        })
        .notFound(() => {
            alert("404");
        })
        .resolve()
});
//call class for in the bottom for now
