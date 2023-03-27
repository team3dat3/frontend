/**
 * A reference to the root element.
 * @type {HTMLElement}
 * @private
 */
const ROOT = document.getElementById('root');

/**
 * Set the hide transition animation.
 * @type {string}
 * @private
 */
let hideAnimation = "slideOutRight";

/**
 * Set the hide transition duration.
 * @type {number}
 * @private
 */
let hideDuration = 500;

/**
 * Set the show transition animation.
 * @type {string}
 * @private
 */
let showAnimation = "slideInLeft";

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