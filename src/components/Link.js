import animateableElement from "./AnimatableElement.js";

/**
 * Link component.
 * 
 * @param {Object} options
 * 
 * @returns {HTMLElement}
 */
export default function Link (options) {
    const a = animateableElement('a', options.animation);
    
    // Add classes to link
    a.classList.add('link');
    a.classList.add(`${options.type}`);
    
    // Add text and href to link
    a.textContent = options.text;
    a.href = options.href;

    // Add navigo data attribute to link
    a.setAttribute('data-navigo', '');

    return a;
}
