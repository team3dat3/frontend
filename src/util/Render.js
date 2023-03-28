/**
 * A reference to the root element.
 * @type {HTMLElement}
 * @private
 */
let ROOT = null;

/**
 * Set the hide transition animation.
 * @type {string}
 * @private
 */
let hideAnimation = "zoomOut";

/**
 * Set the hide transition duration.
 * @type {number}
 * @private
 */
let hideDuration = 100;

/**
 * Set the show transition animation.
 * @type {string}
 * @private
 */
let showAnimation = "zoomIn";

/**
 * Set the show transition duration.
 * @type {number}
 * @private
 */
let showDuration = 500;

/**
 * Check if the page has been initialized.
 * @type {boolean}
 * @private
 */
let initialized = false;

/**
 * Set the root element.
 * 
 * @param {HTMLElement} root
 * 
 * @returns {undefined}
 */
export function setRoot(root) {
    ROOT = root;
}

/**
 * Load and render the page.
 *  
 * @param {string} pathToFile
 * 
 * @returns {undefined}
 */
export function loadAndRender(pathToFile, callback) {
    loadHtml(pathToFile).then(html => {
        render([html]);
        if (callback) {
            callback(html);
        }
    }).catch(error => {
        console.log(error);
    });
}

/**
 * Render the page.
 * 
 * @param {Array} htmlElements
 *  
 * @returns {undefined}
 */
export function render(htmlElements) {
    if (initialized) {
        hideTransition();
    }
    
    if (!initialized) {
        initialized = true;
    }    

    setTimeout(() => {
        showTransition(htmlElements);
    }, hideDuration);
}

/**
 * Fetch the HTML file and return the outer div.
 * 
 * @param {string} pathToFile
 *  
 * @returns {HTMLElement}
 */
export async function loadHtml(pathToFile) {
    const resHtml = await fetch(pathToFile).then(r => {
        if (!r.ok) {
            throw new Error(`Failed to load the page: '${pathToFile}' `)
        }
        return r.text();
    });

    const parser = new DOMParser();
    const content = parser.parseFromString(resHtml, "text/html");
    const div = content.querySelector(".template");
    
    if (!div) {
        throw new Error(`No outer div with class 'template' found in file '${pathToFile}'`);
    }

    return div;
};

/**
 * Set the hide transition.
 * 
 * @param {string} animation
 * @param {number} duration
 * 
 * @returns {undefined}
 */
export function setHideTransition(animation, duration) {
    hideAnimation = animation;
    hideDuration = duration;
}

/**
 * Set the show transition.
 * 
 * @param {string} animation
 * @param {number} duration
 * 
 * @returns {undefined}
 */
export function setShowTransition(animation, duration) {
    showAnimation = animation;
    showDuration = duration;
}

/**
 * Hide transition.
 * 
 * @returns {undefined}
 */
function hideTransition() {
    // Hide transition
    // set animation with forwards to prevent the animation from flickering
    ROOT.style.animation = `${hideAnimation} ${hideDuration}ms forwards`;
}

/**
 * Show transition.
 * 
 * @param {Array} htmlElements
 * 
 * @returns {undefined}
 */
function showTransition(htmlElements) {
    // Remove all children from root
    ROOT.innerHTML = "";
    // Add new children to root
    htmlElements.forEach(element => {
        ROOT.appendChild(element);
    });
    // Show transition
    // set animation with forwards to prevent the animation from flickering
    ROOT.style.animation = `${showAnimation} ${showDuration}ms forwards`;

    setTimeout(() => {
        // Remove animation from root
        ROOT.style.animation = "";
    }, showDuration);
}