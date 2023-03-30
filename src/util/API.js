import { isExpired } from './Authenticated.js';
import { showToast } from '../components/Toast.js';
import { refreshHeader } from '../view/layout/Header.js';

/**
 * The base URL for the API.
 * @type {string}
 */
const baseUrl = window.env?.ENVIRONMENT === 'production' ?
    'https://backend123.azurewebsites.net/v1' : 'http://localhost:8080/v1';

/**
 * Debug mode.
 * @type {boolean}
 */
const debug = window.env?.ENVIRONMENT === 'development';

/**
 * Sets the API key in local storage.
 * 
 * @param {string} apiKey
 * 
 * @returns {undefined}
 */
export function setAPIKey(apiKey) {
    localStorage.setItem('apiKey', `Bearer ${apiKey}`);
}

/**
 * Checks if the API key exists in local storage.
 * 
 * @returns {boolean}
 */
export function hasAPIKey() {
    return localStorage.getItem('apiKey') !== null;
}

/**
 * Fetches the API key from local storage.
 * 
 * @returns {string}
 */
export function getAPIKey() {
    return localStorage.getItem('apiKey');
}

/**
 * Removes the API key from local storage.
 * 
 * @returns {undefined}
 */
export function removeAPIKey() {
    localStorage.removeItem('apiKey');
}

/**
 * Sends a request to the API.
 *
 * @param {string} endpoint
 * @param {Object} options
 * 
 * @returns {undefined}
 */
export async function request(endpoint, options) {

    if (hasAPIKey() && isExpired()) {
        onExpiration();
        return;
    }

    // Get the fetch options used to send the request
    let fetchOptions = createFetchOptions(
        options.method,
        options.body);

    // If debug mode is enabled, print the debug info
    if (debug) {
        printDebugInfo(endpoint, options);
    }

    // Fetch the API
    const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);
    
    // If the response is ok, parse the JSON and call the callback    
    if (response.ok) {
        const json = await response.json();
        options.callback(json);

        // If the response is not ok, call the error callback
    } else {
        options.error(response);
    }
}

/**
 * Prints the debug info.
 * 
 * @param {string} endpoint
 * @param {Object} options
 * 
 * @returns {undefined}
 */
function printDebugInfo(endpoint, options) {
    console.log(`Request Debug info => Endpoint: ${endpoint} Options: ${JSON.stringify(options)}`);
}

/**
 * Creates the fetch options object.
 *
 * @param {string} method
 * @param {Object} body
 * 
 * @returns {Object}
 */
function createFetchOptions(method, body) {
    // Create the fetch options object
    let fetchOptions = {
        // If method is undefined, use GET as default
        method: method ? method : 'GET',
        // Add headers to the fetch options
        headers: headers()
    };

    // If body is defined, stringify it and add it 
    // to the fetch options
    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }

    return fetchOptions;
}

/**
 * Creates the headers object.
 *
 * @returns {Headers}
 */
function headers() {
    // Create a new Headers object
    let headers = new Headers();

    // Add the headers
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    // If the user is logged in, add the Authorization header
    if (hasAPIKey()) {
        headers.append('Authorization', getAPIKey());
    }

    return headers;
}

function onExpiration() {
    removeAPIKey();
    refreshHeader(document);
    showToast('secondary', 'Your session has expired. Please login again.', 5000);
    window.router.navigate('/login');
}
