import ReservationController from "../controller/ReservationController.js";
import ReservationRequest from "../dto/reservation/ReservationRequest.js";

// Create a reservation controller
const reservationController = new ReservationController();

/**
 * Reservation page class.
 *  
 * @returns {ReservationPage}
 */
export default function ReservationPage() {
    
    // Find all reservations
    reservationController.findAll((reservationResponses) => {
        console.log(reservationResponses);
    }, (error) => {
        console.log(error);
    });

    // Find a reservation
    reservationController.find(1, (reservationResponse) => {
        console.log(reservationResponse);
    }, (error) => {
        console.log(error);
    });

    // Create a reservation
    const reservationRequest = new ReservationRequest(0, false);
    reservationController.create(reservationRequest, (reservationResponse) => {
        console.log(reservationResponse);
    }, (error) => {
        console.log(error);
    });

    // Update a reservation
    reservationRequest.checkedIn = true;
    reservationController.update(reservationRequest, (reservationResponse) => {
        console.log(reservationResponse);
    }, (error) => {
        console.log(error);
    });

    // Delete a reservation
    reservationController.delete(reservationRequest, () => {
        console.log("Reservation deleted");
    }, (error) => { 
        console.log(error);
    });
}