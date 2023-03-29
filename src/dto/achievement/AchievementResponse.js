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
export default class AchievementResponse {
    constructor(id, username, name, description, unlocked) {
        this.id = id
        this.username = username
        this.name = name
        this.description = description
        this.unlocked = unlocked
    }

    /**
     * Create a new AchievementResponse from a json object
     * 
     * @param {Object} json 
     * 
     * @returns {AchievementResponse}
     */
    static createFrom(json) {
        return new AchievementResponse(json.id, json.username, json.name, json.description, json.unlocked);
    }

    /**
     * Create a collection of AchievementResponse from a json object
     * 
     * @param {Array} json 
     * 
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(AchievementResponse, json);
    }
}