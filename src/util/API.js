
/**
 * The base URL for the API.
 * @type {string}
 */
let baseUrl = window.env?.ENVIRONMENT === 'production' ?
    'https://api.bergandersen.com/v1' : 'http://localhost:8080/v1';

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
function hasAPIKey() {
    return localStorage.getItem('apiKey') !== null;
}

/**
 * Fetches the API key from local storage.
 * 
 * @returns {string}
 */
function getAPIKey() {
    return localStorage.getItem('apiKey');
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
    // Get the fetch options used to send the request
    let fetchOptions = createFetchOptions(
        options.method,
        options.body);

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
        headers: headers(),
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
