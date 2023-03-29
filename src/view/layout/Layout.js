import { loadHtml, setRoot } from '../../util/Render.js';
import { refreshHeader } from './Header.js';

/**
 * Load and initialize the layout
 *  
 * @returns {undefined}
 */
loadHtml("./src/view/layout/template.html").then((html) => {
    // Add the layout to the root element
    document.getElementById("root").appendChild(html);

    // Set the render's root element
    setRoot(html.querySelector('#main-content'));

    // Refresh the header
    refreshHeader(html);
});

