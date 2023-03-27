import ShowController from "../controller/ShowController.js";
import ShowRequest from "../dto/ShowRequest.js";

// Create a show controller
const showController = new ShowController();

/**
 * Show page class.
 *  
 * @returns {ShowPage}
 */
export default function ShowPage() {
  /*   
    // Find all shows
    showController.findAll((showResponses) => {
        console.log(showResponses);
    }, (error) => {
        console.log(error);
    });

    // Find a show
    showController.find(1, (showResponse) => {
        console.log(showResponse);
    }, (error) => {
        console.log(error);
    });

    // Create a show - connect to a form
    const showRequest = new ShowRequest(1, // show id
        "The Matrix",  // movieTitle
    [20, 15, 10], // reservations
    [Date.parse("2023-04-01"), Date.parse("2023-04-05"), Date.parse("2023-04-10")], // showDates
    12.50, // price
    1234 // theaterId
    ); 
    showController.create(showRequest, (showResponse) => {
        console.log(showResponse);
    }, (error) => {
        console.log(error);
    });

     // Update a show
    showRequest.price = 16; 
    showController.update(showRequest, (showResponse) => {
        console.log(showResponse);
    }, (error) => {
        console.log(error);
    });

    // Delete a show
    showController.delete(showRequest, () => {
        console.log("Show deleted");
    }, (error) => { 
        console.log(error);
    });*/
}