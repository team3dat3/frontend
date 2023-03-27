import "./config/Config.js"; // Load the config
import { render, loadHtml, setRoot } from "./util/Render.js";

//import MoviePage from "./view/MoviePage.js";
//import ReservationPage from "./view/ReservationPage.js";

/**
 * Load the layout.
 * 
 * @type {HTMLElement}
 * @private
 */
const layout = await loadHtml("./src/templates/layout/layout.html");

// Add the layout to the root element
document.getElementById("root").appendChild(layout);

// Set the render's root element
setRoot(document.getElementById("main-content"));

/* Insert Navigo router here instead of the test code below */ 
// Test the render function
const p = document.createElement("p");
p.innerHTML = "Hello World";
render([p]);