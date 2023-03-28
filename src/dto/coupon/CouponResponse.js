
/**
 * @param {number} id
 * @param {string} name
 * @param {number} discount
 * @param {string} user
 * @param {number} cost
 * @param {boolean} used
 * 
 * @returns {CouponResponse}
 */

export default class CouponResponse{
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
     * @returns {CouponResponse}
     */
    static createFrom(json){
        return new CouponResponse(json.id, json.name, json.discount, json.user, json.cost, json.used);
    }

    /**
     * 
     * @param {Array} json 
     * @returns {Array}
     */
    static createCollectionFrom(json){
        return new BaseModel.createCollectionFrom(CouponResponse, json);
    }
}