import animateableElement from "./AnimatableElement.js";

/**
 * Create Toast component.
 * 
 * @param {Object} options
 * 
 * @returns {HTMLElement}
 */
function createToast (options) {
    const div = animateableElement('div', options.animation);
    
    // Add classes to toast
    div.classList.add('toast');
    div.classList.add(`${options.type}`);
    
    // Add text to toast
    const p = document.createElement('p');
    p.textContent = options.text;
    div.appendChild(p);

    return div;
}

/**
 * Display Toast component.
 * 
 * @param {Object} options
 * 
 * @returns {HTMLElement}
 */
export default function displayToast (options) {
    // Search body for toast wrapper
    const body = document.querySelector('body');
    const toastWrapper = body.querySelector('.toast-wrapper');

    // If toast wrapper does not exist, create it
    if (!toastWrapper) {
        const div = document.createElement('div');
        div.classList.add('toast-wrapper');
        body.appendChild(div);
    }

    // Create toast
    const toast = createToast(options);

    // Set timeout to remove toast
    setTimeout(() => {
        // Set hide animation
        toast.style.animation = `${options.hide.animation.type} ${options.hide.animation.duration}ms`;
        // Remove toast after duration
        setTimeout(() => {
            toast.remove();
        }, options.hide.animation.duration);
    }, options.duration);
    
    // Append toast to toast wrapper
    toastWrapper.appendChild(toast);
}