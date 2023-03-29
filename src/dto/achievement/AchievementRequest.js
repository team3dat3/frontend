import BaseModel from "../BaseModel.js"

/**
 * Achievement Request
 * 
 * @param {number} id
 * @param {string} username
 * @param {string} name
 * @param {string} description
 * @param {boolean} unlocked
 * 
 * @returns {AchievementRequest}
 */
export default class AchievementRequest {
    constructor(id, username, name, description, unlocked) {
        this.id = id
        this.username = username
        this.name = name
        this.description = description
        this.unlocked = unlocked
    }

    /**
     * Create a new AchievementRequest from a json object
     * 
     * @param {Object} json 
     * 
     * @returns {AchievementRequest}
     */
    static createFrom(json) {
        return new AchievementRequest(json.id, json.username, json.name, json.description, json.unlocked);
    }

    /**
     * Create a collection of AchievementRequest from a json object
     * 
     * @param {Array} json 
     * 
     * @returns {Array}
     */
    static createCollectionsFrom(json) {
        return BaseModel.createCollectionFrom(AchievementRequest, json);
    }
}