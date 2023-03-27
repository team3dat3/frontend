import { setAPIKey } from '../util/API.js';
import BaseController from './BaseController.js';
import AuthenticationResponse from '../dto/authentication/AuthenticationResponse.js';

/**
 * Authentication controller class.
 * 
 * @returns {AuthenticationController}
 */
export default class AuthenticationController extends BaseController {

    /**
     * Create a new authentication request aka login
     * 
     * @param {ReservationRequest} reservationRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    authenticate(authenticationRequest, callback, error) {
        super.post("/authentication", authenticationRequest, (json) => {callback(AuthenticationResponse.createFrom(json))}, error);
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