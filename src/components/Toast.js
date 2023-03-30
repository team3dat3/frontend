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

    // Set show animation
    div.style.animation = `${options.show.animation.type} ${options.show.animation.duration}ms`;

    // Remove animation after duration
    setTimeout(() => {
        div.style.animation = '';
    }, options.show.animation.duration);
    
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
export function displayToast (options) {
    // Search body for toast wrapper
    const body = document.querySelector('body');
    let toastWrapper = body.querySelector('.toast-wrapper');
    
    // If toast wrapper does not exist, create it
    if (!toastWrapper) {
        toastWrapper = document.createElement('div');
        toastWrapper.classList.add('toast-wrapper');
        body.appendChild(toastWrapper);
    }

    // Create toast
    const toast = createToast(options);

    // The offset is used to avoid wierd flickering when removing the toast
    const removeOffset = 10;
    // Set timeout to remove toast
    setTimeout(() => {
        // Set hide animation
        toast.style.animation = `${options.hide.animation.type} ${options.hide.animation.duration}ms`;
        // Remove toast after duration
        setTimeout(() => {
            toast.remove();
        }, options.hide.animation.duration - removeOffset);
    }, options.duration);

    // Append toast to toast wrapper
    toastWrapper.appendChild(toast);
}

/**
 * Quick display method for Toast component.
 * 
 * @param {String} type
 * @param {String} text
 * @param {Number} showDuration
 * @param {Number} animationDuration
 * @param {String} showAnimation
 * @param {String} hideAnimation
 * 
 * @returns {HTMLElement}
 */
export function showToast(type, text, showDuration) {
    displayToast({
        type: type,
        text: text,
        duration: showDuration,
        show: {
            animation: {
                type: 'backInUp',
                duration: 500
            }
        },
        hide: {
            animation: {
                type: 'backOutDown',
                duration: 200
            }
        },
    });
}