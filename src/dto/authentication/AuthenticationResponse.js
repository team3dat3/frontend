import BaseModel from "../BaseModel.js";

/**
 * Authentication response class.
 * 
 * @param {string} token
 * 
 * @returns {AuthenticationResponse}
 */
export default class AuthenticationResponse {
    constructor(token) {
        this.token = token;
    }

    /**
     * Creates an Authentication response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {AuthenticationResponse}
     */
    static createFrom(json) {
        return new AuthenticationResponse(json.token);
    }

    /**
     * Creates a collection of Authentication response from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(AuthenticationResponse, json);
    }
}