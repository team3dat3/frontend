import "../util/navigo_EditedByLars.js";

// Public pages
import Home from "../view/home/Home.js";

// Authentication pages
import Login from "../view/authentication/Login.js";

// User pages
import UserAdminIndex from "../view/user/admin/index/Index.js";
import UserAdminShow from "../view/user/admin/show/Show.js";
import UserAdminEdit from "../view/user/admin/edit/Edit.js";
import UserAdminCreate from "../view/user/admin/create/Create.js";
import UserMemberShow from "../view/user/member/show/Show.js";
import UserMemberEdit from "../view/user/member/edit/Edit.js";
import UserAnonymousCreate from "../view/user/anonymous/create/Create.js";

// Reservation pages
import ReservationAdminIndex from "../view/reservation/admin/index/Index.js";
import ReservationAdminShow from "../view/reservation/admin/show/Show.js";
import ReservationAdminEdit from "../view/reservation/admin/edit/Edit.js";
import ReservationAdminCheckIn from "../view/reservation/admin/checkin/CheckIn.js";
import ReservationMemberShow from "../view/reservation/member/show/Show.js";
import ReservationMemberIndex from "../view/reservation/member/index/Index.js";

// Theater pages
import TheaterAdminEdit from "../view/theater/admin/edit/Edit.js";
import TheaterAdminCreate from "../view/theater/admin/create/Create.js";
import TheaterAdminIndex from "../view/theater/admin/index/Index.js";
import TheaterAdminShow from "../view/theater/admin/show/Show.js";

// Seat row pages
import SeatRowAdminCreate from "../view/seatrow/admin/create/Create.js";
import SeatRowAdminShow from "../view/seatrow/admin/show/Show.js";
import SeatRowAdminIndex from "../view/seatrow/admin/index/Index.js";

// Seat pages
import SeatAdminCreate from "../view/seat/admin/create/Create.js";
import SeatAdminShow from "../view/seat/admin/show/Show.js";
import SeatAdminIndex from "../view/seat/admin/index/Index.js";

// Coupon pages
import CouponAdminIndex from "../view/coupon/admin/index/Index.js";
import CouponAdminCreate from "../view/coupon/admin/create/Create.js";
import CouponAdminEdit from "../view/coupon/admin/edit/Edit.js";
import CouponMemberIndex from "../view/coupon/member/index/Index.js";
import CouponMemberShow from "../view/coupon/member/show/Show.js";

// Show pages
import ShowAdminCreate from "../view/show/admin/create/Create.js";
import ShowAdminEdit from "../view/show/admin/edit/Edit.js";
import ShowAnonymousIndex from "../view/show/anonymous/index/Index.js";
import ShowAnonymousShow from "../view/show/anonymous/show/Show.js";

// ShowDateTime pages
import ShowDateTimeAdminCreate from "../view/showdatetime/admin/create/Create.js";
import ShowDateTimeAdminEdit from "../view/showdatetime/admin/edit/Edit.js";
import ShowDateTimeAdminIndex from "../view/showdatetime/admin/index/Index.js";
import ShowDateTimeAdminShow from "../view/showdatetime/admin/show/Show.js";

// Movie pages
import MovieAdminCreate from "../view/movie/admin/create/Create.js";
import MovieAdminEdit from "../view/movie/admin/edit/Edit.js";
import MovieAdminIndex from "../view/movie/admin/index/Index.js";
import MovieAdminShow from "../view/movie/admin/show/Show.js";
import MovieGenresAdminShow from "../view/movie/admin/showByGenre/ShowByGenre.js";

/**
 * Router.
 * @private
 * @type {Navigo}
 */
const router = new Navigo("/", { hash: true });

// Set the router as a global variable
window.router = router;
// Add a hash to the URL if there is none
// And add the url to the history
let path = window.location.hash;
if (path == "") { //Do this only for hash
    path = "#/"
    window.history.pushState({}, path, window.location.href + path);
}

// Initialize the router
router

    // Setup hooks
    .hooks({
        before(done, match) {
            done();
        }
    })

    // Setup routes
    .on({
        "/": Home,

        // Reservations
        "/admin/reservations": ReservationAdminIndex,
        "/admin/reservations/:id/show": ({data}) => ReservationAdminShow(data.id),
        "/admin/reservations/:id/edit": ({data}) => ReservationAdminEdit(data.id),
        "/admin/reservations/:id/checkin": ({data}) => ReservationAdminCheckIn(data.id),
        "/member/reservations": ReservationMemberIndex,
        "/member/reservations/:id/show": ({data}) => ReservationMemberShow(data.id),

        // Authentication
        "/login": Login,

        // Users
        "/admin/users": UserAdminIndex,
        "/admin/users/create": UserAdminCreate,
        "/admin/users/:username/show": ({data}) => UserAdminShow(data.username),
        "/admin/users/:username/edit": ({data}) => UserAdminEdit(data.username),
        "/member/users/:username/show": ({data}) => UserMemberShow(data.username),
        "/member/users/:username/edit": ({data}) => UserMemberEdit(data.username),
        "/register": UserAnonymousCreate,

        // Theaters
        "/admin/theaters/create": TheaterAdminCreate,
        "/admin/theaters": TheaterAdminIndex,
        "/admin/theaters/:id/show": ({data}) => TheaterAdminShow(data.id),
        "/admin/theaters/:id/edit": ({data}) => TheaterAdminEdit(data.id),

        // Seat rows
        "/admin/seatrows/create": SeatRowAdminCreate,
        "/admin/seatrows": SeatRowAdminIndex,
        "/admin/seatrows/:id/show": ({data}) => SeatRowAdminShow(data.id),

        // Seats
        "/admin/seats/create": SeatAdminCreate,
        "/admin/seats": SeatAdminIndex,
        "/admin/seats/:id/show": ({data}) => SeatAdminShow(data.id),

        // Coupons
        "/admin/coupons": CouponAdminIndex,
        "/admin/coupons/create": CouponAdminCreate,
        "/admin/coupons/:id/edit": ({data}) => CouponAdminEdit(data.id),
        "/member/coupons": CouponMemberIndex,
        "/member/coupons/:id/show": ({data}) => CouponMemberShow(data.id),

        // Shows
        "/admin/shows/create": ShowAdminCreate,
        "/admin/shows/:id/edit": ({data}) => ShowAdminEdit(data.id),
        "/shows": ShowAnonymousIndex,
        "/shows/:id/show": ({data}) => ShowAnonymousShow(data.id),

        // Show date times
        "/admin/showdatetimes/create": ShowDateTimeAdminCreate,
        "/admin/showdatetimes/:id/edit": ({data}) => ShowDateTimeAdminEdit(data.id),
        "/admin/showdatetimes": ShowDateTimeAdminIndex,
        "/admin/showdatetimes/:id/show": ({data}) => ShowDateTimeAdminShow(data.id),

        // Movies
        "/admin/movies/create": MovieAdminCreate,
        "/admin/movies/:title/edit": ({data}) => MovieAdminEdit(data.title),
        "/admin/movies": MovieAdminIndex,
        "/admin/movies/:title/show": ({data}) => MovieAdminShow(data.title),
        "/admin/movies/genres/:genre": ({data}) => MovieGenresAdminShow(data.genre),

    })

    // Setup not found route
    .notFound(() => {
        alert("404");
    })

    // Resolve the router
    .resolve();