import TheaterController from "../controller/TheaterController.js";
import TheaterRequest from "../dto/theater/TheaterRequest.js";

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater page class.
 *  
 * @returns {TheaterPage}
 */
export default function TheaterPage() {
    // Find all theaters
    theaterController.findAll((theaterResponses) => {
        console.log(theaterResponses);
    }, (error) => {
        console.log(error);
    });

    // Find a theater
    theaterController.find(1, (theaterResponse) => {
        console.log(theaterResponse);
    }, (error) => {
        console.log(error);
    });

    // Create a theater
    theaterController.create(theaterRequest, (theaterResponse) => {
        console.log(theaterResponse);
    }, (error) => {
        console.log(error);
    });

    // Update a theater
    theaterController.update(theaterRequest, (theaterResponse) => {
        console.log(theaterResponse);
    }, (error) => {
        console.log(error);
    });

    // Delete a theater
    theaterController.delete(theaterRequest, () => {
        console.log("Theater deleted");
    }, (error) => { 
        console.log(error);
    });
    
}