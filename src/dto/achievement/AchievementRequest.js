import BaseModel from "../BaseModel.js"

/**
 * Achievement Request
 * @param {number} id
 */

export default class AchievementRequest {
    constructor(id) {
        this.id = id
    }

    /**
     * 
     * @param {Object} json 
     * @returns {AchievementRequest}
     */

    static createFrom(json) {
        return new AchievementRequest(json.id);
    }

    /**
     * 
     * @param {Array} json 
     * @returns {Array}
     */

    static createCollectionsFrom(json) {
        return BaseModel.createCollectionFrom(AchievementRequest, json);
    }
}