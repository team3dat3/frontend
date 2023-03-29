import ReservationController from "../../../../controller/ReservationController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation member show.
 *  
 * @returns {undefined}
 */
export default function ReservationMemberShow(id) {
    // Load and render the reservation member show template
    loadAndRender('src/view/reservation/member/show/template.html', (html) => {
        // find qrcode element within the template
        const qrcodeWrapper = html.querySelector('#qrcode');

        // Create and render a new QRCode
        new QRCode(qrcodeWrapper, `https://bergandersen.com/admin/reservations/${id}/checkin`);

        // Find reservation
        reservationController.findUserReservation(id, (reservationResponse) => {
            html.querySelector('#reservation-username').innerHTML = reservationResponse.username;
            html.querySelector('#reservation-show').innerHTML = reservationResponse.showMovieTitle;
            html.querySelector('#reservation-showDateTime').innerHTML = reservationResponse.showDateTime;
            html.querySelector('#reservation-theater').innerHTML = reservationResponse.theaterName;
            html.querySelector('#reservation-seats').innerHTML = reservationResponse.seatIds;
        }, (error) => {
            console.log(error);
        });
    });
}