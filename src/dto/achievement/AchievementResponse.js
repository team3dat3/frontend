import BaseModel from "../BaseModel.js"

/**
 * Achievement response
 * @param {number} id
 */

export default class AchievementResponse {
    constructor(id) {
        this.id = id
    }

    /**
     * 
     * @param {Object} json 
     * @returns {AchievementResponse}
     */
    static createFrom(json) {
        return new AchievementResponse(json.id);
    }

    /**
     * 
     * @param {Array} json 
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(AchievementResponse, json);
    }
}