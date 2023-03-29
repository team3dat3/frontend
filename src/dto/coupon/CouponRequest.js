import BaseModel from "../BaseModel.js"

/**
 * Coupon Request
 * 
 * @param {number} id
 * @param {string} name
 * @param {number} discount
 * @param {string} user
 * @param {number} cost
 * @param {boolean} used
 * 
 * @returns {CouponRequest}
 */

export default class CouponRequest {
    constructor(id, name, discount, username, cost, used){
        this.id = id
        this.name = name
        this.discount = discount
        this.username = username
        this.cost = cost
        this.used = used
    }

    /**
     * 
     * @param {Object} json 
     * @returns {CouponRequest}
     */

    static createFrom(json){
        return new CouponRequest(json.id, json.name, json.discount, json.username, json.cost, json.used);
    }

    /**
     * 
     * @param {Array} json 
     * @returns {Array}
     */

    static createCollectionsFrom(json){
        return BaseModel.createCollectionFrom(CouponRequest, json);
    }
}