import BaseModel from "../BaseModel"

/**
 * User request
 * @param {string} email
 * @param {string} phoneNumber
 * @param {number[]} achievements
 * @param {number[]} reservations
 * @param {number[]} coupons
 */


export default class UserRequest {
    constructor(email, phoneNumber, achievements, reservations, coupons){
        this.email = email;
        this.phoneNumber = phoneNumber
        this.achievements = achievements
        this.reservations = reservations
        this.coupons = coupons
    }

    /**
     * Creates user request from a JSON object
     * 
     * @param {Object} json 
     * @returns  {UserRequest}
     */

    static createFrom(json){
        return new UserRequest(json.email, json.phoneNumber, json.achievements, json.reservations, json.coupons);
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