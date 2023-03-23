import animateableElement from "./AnimatableElement.js";

/**
 * Button component.
 * 
 * @param {Object} options
 * 
 * @returns {HTMLElement}
 */
export default function Button (options) {
    const button = animateableElement('button', options.animation);
    button.classList.add('button');
    button.classList.add(`${options.type}`);
    button.textContent = options.text;

    return button;
}
