import SeatRowController from "../controller/SeatRowController.js";
import SeatRowRequest from "../dto/seatrow/SeatRowRequest.js";

// Create a seatrow controller
const seatRowController = new SeatRowController();

/**
 * SeatRow page class.
 *  
 * @returns {SeatRowPage}
 */
export default function SeatRowPage() {
    
    // Find all seatrows
    seatRowController.findAll((seatRowResponses) => {
        console.log(seatRowResponses);
    }, (error) => {
        console.log(error);
    });

    // Find a seat row
    seatRowController.find(1, (seatRowResponse) => {
        console.log(seatRowResponse);
    }, (error) => {
        console.log(error);
    });

    // Create a seat row
    seatRowController.create(seatRowRequest, (seatRowResponse) => {
        console.log(seatRowResponse);
    }, (error) => {
        console.log(error);
    });

    // Update a seat row
    seatRowController.update(seatRowRequest, (seatRowResponse) => {
        console.log(seatRowResponse);
    }, (error) => {
        console.log(error);
    });

    // Delete a seat row
    seatRowController.delete(seatRowRequest, () => {
        console.log("Seat row deleted");
    }, (error) => { 
        console.log(error);
    });
}