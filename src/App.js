import "./config/Config.js"; // Load the config
import { loadHtml, setRoot } from "./util/Render.js";
import "./util/navigo_EditedByLars.js";

// Layout
import Layout from "./view/layout/Layout.js";

// Public pages
import Home from "./view/home/Home.js";

// Authentication pages
import Login from "./view/authentication/Login.js";

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
Layout().then(() => {

    const router = new Navigo("/", { hash: true });
    window.router = router;

    let path = window.location.hash;
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
            "/": Home,

            // Reservations
            "/admin/reservations": ReservationAdminIndex,
            "/admin/reservations/:id": ReservationAdminShow,
            "/admin/reservations/:id/edit": ReservationAdminEdit,
            "/admin/reservations/:id/checkin": ReservationAdminCheckIn,
            "/member/reservations": ReservationMemberIndex,
            "/member/reservations/:id": ReservationMemberShow,
        
            // Authentication
            "/login": Login,
        })
        .notFound(() => {
            alert("404");
        })
        .resolve();
});

