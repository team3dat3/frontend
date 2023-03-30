import BaseModel from "../BaseModel.js"

/**
 * User request
 * @param {string} email
 * @param {string} phoneNumber
 * @param {number[]} achievements
 * @param {number[]} reservations
 * @param {number[]} coupons
 * @returns {number[]}
 */
export default class UserResponse {
    constructor(username, email, phoneNumber, roles, createdAt, accountNonExpired, accountNonLocked, credentialsNonExpired, enabled) {
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.createdAt = new Date(createdAt).toLocaleString();
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
        this.enabled = enabled;
    }

    /**
     * Creates a user request from a JSON object
     * 
     * @param {object} json
     * @returns {UserResponse}
     */
    static createFrom(json) {
        return new UserResponse(
            json.username, 
            json.email, 
            json.phoneNumber, 
            json.roles, 
            json.createdAt, 
            json.accountNonExpired, 
            json.accountNonLocked, 
            json.credentialsNonExpired, 
            json.enabled);
    }

    /**
     * Creates a collection of user responses from a JSON array
     * 
     * @param {Array} json
     * @returns {Array}
     */
    static createCollectionsFrom(json) {
        return BaseModel.createCollectionFrom(UserResponse, json);
    }
}