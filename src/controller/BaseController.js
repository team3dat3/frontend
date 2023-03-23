import { request, setAPIKey } from '../util/API';

/**
 * Base controller class.
 * 
 * @abstract
 * @returns {BaseController}
 */
export default class BaseController {
    /**
     * Sends a GET request to the API.
     *
     * @param {string} url
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    get = (url, callback, error) => {
        request(url, { method: 'GET', callback, error });
    }

    /**
     * Sends a POST request to the API.
     *
     * @param {string} url
     * @param {Object} body
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    post = (url, body, callback, error) => {
        request(url, { method: 'POST', body, callback, error });
    }

    /**
     * Sends a PUT request to the API.
     *
     * @param {string} url
     * @param {Object} body
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    put = (url, body, callback, error) => {
        request(url, { method: 'PUT', body, callback, error });
    }

    /**
     * Sends a PATCH request to the API.
     *
     * @param {string} url
     * @param {Object} body
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    patch = (url, body, callback, error) => {
        request(url, { method: 'PATCH', body, callback, error });
    }

    /**
     * Sends a DELETE request to the API.
     *
     * @param {string} url
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    delete = (url, callback, error) => {
        request(url, { method: 'DELETE', callback, error });
    }

    /**
     * Sets the API key.
     *
     * @param {string} apiKey
     * 
     * @returns {undefined}
     */
    setAPIKey = (apiKey) => {
        setAPIKey(apiKey);
    }
}