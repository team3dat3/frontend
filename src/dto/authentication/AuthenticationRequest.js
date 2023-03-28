import BaseModel from "../BaseModel.js";

/**
 * Authentication request class.
 * 
 * @param {string} username
 * @param {number} password
 * 
 * @returns {AuthenticationRequest}
 */
export default class AuthenticationRequest {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    /**
     * Creates an Authentication request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {AuthenticationRequest}
     */
    static createFrom(json) {
        return new AuthenticationRequest(json.username, json.password);
    }

    /**
     * Creates a collection of Authentication requests from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(AuthenticationRequest, json);
    }
}