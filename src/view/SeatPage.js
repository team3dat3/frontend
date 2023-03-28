import SeatController from "../controller/SeatController.js";
import SeatRequest from "../dto/seat/SeatRequest.js";

// Create a seat controller
const seatController = new SeatController();

/**
 * Seat page class.
 *  
 * @returns {SeatPage}
 */
export default function SeatPage() {
    
    // Find all seats
    seatController.findAll((seatResponses) => {
        console.log(seatResponses);
    }, (error) => {
        console.log(error);
    });

    // Find a seat
    seatController.find(1, (seatResponse) => {
        console.log(seatResponse);
    }, (error) => {
        console.log(error);
    });

    // Create a seat
    seatController.create(seatRequest, (seatResponse) => {
        console.log(seatResponse);
    }, (error) => {
        console.log(error);
    });

    // Update a seat
    seatController.update(seatRequest, (seatResponse) => {
        console.log(seatResponse);
    }, (error) => {
        console.log(error);
    });

    // Delete a seat
    seatController.delete(seatRequest, () => {
        console.log("Seat deleted");
    }, (error) => { 
        console.log(error);
    });
}