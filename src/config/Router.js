import "../util/navigo_EditedByLars.js";

// Public pages
import Home from "../view/home/Home.js";

// Authentication pages
import Login from "../view/authentication/Login.js";

// User pages
import UserAdminIndex from "../view/user/admin/index/Index.js";
import UserAdminEdit from "../view/user/admin/edit/Edit.js";
import UserAdminCreate from "../view/user/admin/create/Create.js";
import UserMemberShow from "../view/user/member/show/Show.js";
import UserMemberEdit from "../view/user/member/edit/Edit.js";
import UserMemberLogout from "../view/user/member/logout/Logout.js";
import UserAnonymousCreate from "../view/user/anonymous/create/Create.js";

// Reservation pages
import ReservationAdminIndex from "../view/reservation/admin/index/Index.js";
import ReservationAdminEdit from "../view/reservation/admin/edit/Edit.js";
import ReservationAdminCheckIn from "../view/reservation/admin/checkin/CheckIn.js";
import ReservationMemberShow from "../view/reservation/member/show/Show.js";
import ReservationMemberIndex from "../view/reservation/member/index/Index.js";

// Theater pages
import TheaterAdminEdit from "../view/theater/admin/edit/Edit.js";
import TheaterAdminCreate from "../view/theater/admin/create/Create.js";
import TheaterAdminIndex from "../view/theater/admin/index/Index.js";

// Seat row pages
import SeatRowAdminEdit from "../view/seatrow/admin/edit/Edit.js";
import SeatRowAdminCreate from "../view/seatrow/admin/create/Create.js";
import SeatRowAdminIndex from "../view/seatrow/admin/index/Index.js";

// Seat pages
import SeatAdminCreate from "../view/seat/admin/create/Create.js";
import SeatAdminIndex from "../view/seat/admin/index/Index.js";
import SeatAdminEdit from "../view/seat/admin/edit/Edit.js";

// Coupon pages
import CouponAdminIndex from "../view/coupon/admin/index/Index.js";
import CouponAdminCreate from "../view/coupon/admin/create/Create.js";
import CouponAdminEdit from "../view/coupon/admin/edit/Edit.js";
import CouponAdminScan from "../view/coupon/admin/scan/Scan.js";
import CouponMemberIndex from "../view/coupon/member/index/Index.js";
import CouponMemberShow from "../view/coupon/member/show/Show.js";

// Achievement pages
import AchievementAdminIndex from "../view/achievement/admin/index/Index.js";
import AchievementAdminCreate from "../view/achievement/admin/create/Create.js";
import AchievementAdminEdit from "../view/achievement/admin/edit/Edit.js";
import AchievementMemberIndex from "../view/achievement/member/index/Index.js";

// Show pages
import ShowAdminCreate from "../view/show/admin/create/Create.js";
import ShowAdminEdit from "../view/show/admin/edit/Edit.js";
import ShowAnonymousIndex from "../view/show/anonymous/index/Index.js";
import ShowAnonymousShow from "../view/show/anonymous/show/Show.js";

// ShowDateTime pages
import ShowDateTimeAdminCreate from "../view/showdatetime/admin/create/Create.js";
import ShowDateTimeAdminEdit from "../view/showdatetime/admin/edit/Edit.js";
import ShowDateTimeAdminIndex from "../view/showdatetime/admin/index/Index.js";

// Movie pages
import MovieAdminCreate from "../view/movie/admin/create/Create.js";
import MovieAdminEdit from "../view/movie/admin/edit/Edit.js";
import MovieAdminIndex from "../view/movie/admin/index/Index.js";
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
        "/admin/reservations/:id/edit": ({data}) => ReservationAdminEdit(data.id),
        "/admin/reservations/:id/checkin": ({data}) => ReservationAdminCheckIn(data.id),
        "/member/reservations": ReservationMemberIndex,
        "/member/reservations/:id/show": ({data}) => ReservationMemberShow(data.id),

        // Authentication
        "/login": Login,

        // Users
        "/admin/users": UserAdminIndex,
        "/admin/users/create": UserAdminCreate,
        "/admin/users/:username/edit": ({data}) => UserAdminEdit(data.username),
        "/profile": UserMemberShow,
        "/profile/edit": UserMemberEdit,
        "/register": UserAnonymousCreate,
        "/logout": UserMemberLogout,

        // Theaters
        "/admin/theaters/create": TheaterAdminCreate,
        "/admin/theaters": TheaterAdminIndex,
        "/admin/theaters/:id/edit": ({data}) => TheaterAdminEdit(data.id),

        // Seat rows
        "/admin/seatrows/:id/edit": ({data}) => SeatRowAdminEdit(data.id),
        "/admin/seatrows/create": SeatRowAdminCreate,
        "/admin/seatrows": SeatRowAdminIndex,

        // Seats
        "/admin/seats/:id/edit": ({data}) => SeatAdminEdit(data.id),
        "/admin/seats/create": SeatAdminCreate,
        "/admin/seats": SeatAdminIndex,

        // Coupons
        "/admin/coupons": CouponAdminIndex,
        "/admin/coupons/create": CouponAdminCreate,
        "/admin/coupons/:id/edit": ({data}) => CouponAdminEdit(data.id),
        "/admin/coupons/:id/scan": ({data}) => CouponAdminScan(data.id),
        "/member/coupons": CouponMemberIndex,
        "/member/coupons/:id/show": ({data}) => CouponMemberShow(data.id),

        // Achievements
        "/admin/achievements": AchievementAdminIndex,
        "/admin/achievements/create": AchievementAdminCreate,
        "/admin/achievements/:id/edit": ({data}) => AchievementAdminEdit(data.id),
        "/member/achievements": AchievementMemberIndex,

        // Shows
        "/admin/shows/create": ShowAdminCreate,
        "/admin/shows/:id/edit": ({data}) => ShowAdminEdit(data.id),
        "/shows": ShowAnonymousIndex,
        "/shows/:id/show": ({data}) => ShowAnonymousShow(data.id),

        // Show date times
        "/admin/showdatetimes/create": ShowDateTimeAdminCreate,
        "/admin/showdatetimes/:id/edit": ({data}) => ShowDateTimeAdminEdit(data.id),
        "/admin/showdatetimes": ShowDateTimeAdminIndex,

        // Movies
        "/admin/movies/create": MovieAdminCreate,
        "/admin/movies/:title/edit": ({data}) => MovieAdminEdit(data.title),
        "/admin/movies": MovieAdminIndex,
        "/admin/movies/genres/:genre": ({data}) => MovieGenresAdminShow(data.genre),

    })

    // Setup not found route
    .notFound(() => {
        alert("404");
    })

    // Resolve the router
    .resolve();