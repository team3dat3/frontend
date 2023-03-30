import BaseModel from "../BaseModel.js"

/**
 * User request
 * @param {string} username
 * @param {string} password
 * @param {string} email
 * @param {string} phoneNumber
 * @param {string[]} roles
 */


export default class UserRequest {
    constructor(username, password, email, phoneNumber, roles, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled) {
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.roles = roles;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
        this.enabled = enabled;
    }

    /**
     * Creates user request from a JSON object
     * 
     * @param {Object} json 
     * @returns  {UserRequest}
     */

    static createFrom(json){
        return new UserRequest(
            json.username, 
            json.password, 
            json.email, 
            json.phoneNumber, 
            json.roles,
            json.accountNonExpired, 
            json.accountNonLocked, 
            json.credentialsNonExpired, 
            json.enabled);
    }

    /**
     * Creates a collection of user requests from a JSON array
     * 
     * @param {Array}
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(UserRequest, json);
    }
}