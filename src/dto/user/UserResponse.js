/**
 * User request
 * @param {string} email
 * @param {string} phoneNumber
 * @param {number[]} achievements
 * @param {number[]} reservations
 * @param {number[]} coupons
 * @returns {number[]}
 */
export default class UserResponse{
    constructor(email, phoneNumber, achievements, reservations, coupons){
        this.email = email
        this.phoneNumber = phoneNumber
        this.achievements = achievements
        this.reservations = reservations
        this.coupons = coupons
    }

    /**
     * Creates a user request from a JSON object
     * 
     * @param {object} json
     * @returns {UserResponse}
     */
    static createFrom(json){
        return new UserResponse(json.email, json.phoneNumber, json.achievements, json.reservations, json.coupons)
    }

    /**
     * Creates a collection of user responses from a JSON array
     * 
     * @param {Array} json
     * @returns {Array}
     */
    static createCollectionsFrom(json){
        return BaseModel.createCollectionsFrom(UserResponse, json);
    }
}