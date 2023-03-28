import { loadHtml, setRoot } from '../../util/Render.js';

/**
 * Layout.
 *  
 * @returns {undefined}
 */
export default function Layout() {
    return loadHtml("./src/view/layout/template.html").then((html) => {
        // Add the layout to the root element
        document.getElementById("root").appendChild(html);
    
        // Set the render's root element
        setRoot(html.querySelector('#main-content'));
    });
}