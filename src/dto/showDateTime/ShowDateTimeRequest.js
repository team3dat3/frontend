import BaseModel from "../BaseModel.js";

/**
 * ShowDateTime request
 * 
 * @param {number} id
 * @param {Date} showDate
 * @param {number} showId
 *  
 *
 * 
 * @returns {ShowDateTimeRequest}
 */
export default class ShowDateTimeRequest {
    constructor(id, showDate, showId) {
        this.id = id;
        this.showDate = showDate;
        this.showId = showId;
    }

    /**
     * Creates a ShowDateTime request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowDateTimeRequest}
     */
    static createFrom(json) {
        return new ShowDateTimeRequest(json.id, json.showDate, json.showId);
    }

    /**
     * Creates a collection of ShowDateTime request from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(ShowDateTimeRequest, json);
    }
}