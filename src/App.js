import "./config/Config.js"; // Load the config
import { loadHtml, setRoot } from "./util/Render.js";
import "./util/navigo_EditedByLars.js";

// Layout
import Layout from "./view/layout/Layout.js";

// Public pages
import Home from "./view/home/Home.js";

// Authentication pages
import Login from "./view/authentication/Login.js";

// User pages
import UserAdminIndex from "./view/user/admin/index/Index.js";
import UserAdminShow from "./view/user/admin/show/Show.js";
import UserAdminEdit from "./view/user/admin/edit/Edit.js";
import UserMemberShow from "./view/user/member/show/Show.js";
import UserMemberEdit from "./view/user/member/edit/Edit.js";
import UserAnonymousCreate from "./view/user/anonymous/create/Create.js";

// Reservation pages
import ReservationAdminIndex from "./view/reservation/admin/index/Index.js";
import ReservationAdminShow from "./view/reservation/admin/show/Show.js";
import ReservationAdminEdit from "./view/reservation/admin/edit/Edit.js";
import ReservationAdminCheckIn from "./view/reservation/admin/checkin/CheckIn.js";
import ReservationMemberShow from "./view/reservation/member/show/Show.js";
import ReservationMemberIndex from "./view/reservation/member/index/Index.js";

// Theater pages
import TheaterAdminCreate from "./view/theater/admin/create/Create.js";
import TheaterAnonymousIndex from "./view/theater/anonymous/index/Index.js";
import TheaterAnonymousShow from "./view/theater/anonymous/show/Show.js";

// Seat row pages
import SeatRowAdminCreate from "./view/seatrow/admin/create/Create.js";
import SeatRowAdminShow from "./view/seatrow/admin/show/Show.js";
import SeatRowAdminIndex from "./view/seatrow/admin/index/Index.js";

// Coupon pages
import CouponAdminCreate from "./view/coupon/admin/create/Create.js";
import CouponAdminEdit from "./view/coupon/admin/edit/Edit.js";
import CouponMemberIndex from "./view/coupon/member/index/Index.js";
import CouponMemberShow from "./view/coupon/member/show/Show.js";

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

            // Users
            "/admin/users": UserAdminIndex,
            "/admin/users/:username": UserAdminShow,
            "/admin/users/:username/edit": UserAdminEdit,
            "/member/users/:username": UserMemberShow,
            "/member/users/:username/edit": UserMemberEdit,
            "/users/create": UserAnonymousCreate,

            // Theaters
            "/admin/theaters/create": TheaterAdminCreate,
            "/theaters": TheaterAnonymousIndex,
            "/theaters/:id": TheaterAnonymousShow,

            // Seat rows
            "/admin/seatrows/create": SeatRowAdminCreate,
            "/admin/seatrows": SeatRowAdminIndex,
            "/admin/seatrows/:id": SeatRowAdminShow,

            // Coupons
            "/admin/coupons/create": CouponAdminCreate,
            "/admin/coupons/:id/edit": CouponAdminEdit,
            "/member/coupons": CouponMemberIndex,
            "/member/coupons/:id": CouponMemberShow,

        })
        .notFound(() => {
            alert("404");
        })
        .resolve();
});

