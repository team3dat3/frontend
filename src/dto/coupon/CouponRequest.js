import BaseModel from "../BaseModel.js"

/**
 * Coupon Request
 * @param {number} id
 * @param {string} name
 * @param {number} discount
 * @param {string} user
 * @param {number} cost
 * @param {boolean} used
 */

export default class CouponRequest {
    constructor(id, name, discount, user, cost, used){
        this.id = id
        this.name = name
        this.discount = discount
        this.user = user
        this.cost = cost
        this.used = used
    }

    /**
     * 
     * @param {Object} json 
     * @returns {UserReqeust}
     */

    static createFrom(json){
        return new CouponRequest(json.id, json.name, json.discount, json.user, json.cost, json.used);
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