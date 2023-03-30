import ReservationController from "../../../../controller/ReservationController.js";
import ReservationRequest from "../../../../dto/reservation/ReservationRequest.js";
import ShowController from "../../../../controller/ShowController.js";
import ShowDateTimeController from "../../../../controller/ShowDateTimeController.js";
import SeatController from "../../../../controller/SeatController.js";

import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

// Create a reservation controller
const reservationController = new ReservationController();

const showController = new ShowController();

const showDateTimeController = new ShowDateTimeController();

const seatController = new SeatController();


/**
 * Reservation member create.
 *  
 * @returns {undefined}
 */
export default function ReservationMemberCreate(showId) {
    // Load and render the reservation member create template
    loadAndRender('src/view/reservation/member/create/template.html', (html) => {

        html.querySelector("#backbutton").href = `/#/shows/${showId}/show`

        showController.find(showId, (showResponse) =>{
            seatController.findByTheaterId(showResponse.theaterId, (seatResponses) => {
                seatResponses.forEach(seatResponse => {
                    const option = document.createElement("option")
                    option.value = seatResponse.id;
                    option.innerHTML = seatResponse.id;
                    html.querySelector("#seats").appendChild(option);
                });
                
            }, (error) => {
                console.log(error)
            })
        }, (error) =>{

            console.log(error)
        })


        showDateTimeController.findShowDatesShow(showId, (showDateTimesResponses) =>{
            
            console.log(showDateTimesResponses)
            showDateTimesResponses.forEach(showDateTime => {
                const option = document.createElement("option")
                option.value = showDateTime.id;
                option.innerHTML = showDateTime.showDate;
                html.querySelector("#show-dates").appendChild(option);
                
            });
            
        }, (error) => {
            console.log(error)
        })

        const form = html.querySelector("#show-form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // find all seat ids
            const seatIds = [];
            const seats = html.querySelector("#seats");
            for (let i = 0; i < seats.length; i++) {
                if (seats[i].selected) {
                    seatIds.push(seats[i].value);
                }
            }            

            const formData = new FormData(form);
            const request = new ReservationRequest(
                    0,
                    false,
                    "",
                    showId,
                    seatIds,
                    formData.get("show-dates")
            );

            reservationController.createUserReservation(request, (reservationResponse) => {
                window.router.navigate(`/member/reservations/${reservationResponse.id}/show`);
                showToast('success', `Reservation saved`, 5000);
            },
            (error) =>{
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            })
        })

    })
}
