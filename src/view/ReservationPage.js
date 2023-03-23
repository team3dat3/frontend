import ReservationController from "../controller/ReservationController";
import Reservation from "../model/Reservation";

const reservationController = new ReservationController();

export default function ReservationPage() {
    
    // Find all reservations
    reservationController.findAll((reservations) => {
        console.log(reservations);
    }, (error) => {
        console.log(error);
    });

    // Find a reservation
    reservationController.find(1, (reservation) => {
        console.log(reservation);
    }, (error) => {
        console.log(error);
    });

    // Create a reservation
    const reservation = new Reservation(0, false);
    reservationController.create(reservation, (reservation) => {
        console.log(reservation);
    }, (error) => {
        console.log(error);
    });

    // Update a reservation
    reservation.checkedIn = true;
    reservationController.update(reservation, (reservation) => {
        console.log(reservation);
    }, (error) => {
        console.log(error);
    });

    // Delete a reservation
    reservationController.delete(reservation, () => {
        console.log("Reservation deleted");
    }, (error) => { 
        console.log(error);
    });
}