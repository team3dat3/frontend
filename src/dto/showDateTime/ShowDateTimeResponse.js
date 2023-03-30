import BaseModel from "../BaseModel.js";

/**
 * ShowDateTime response
 * 
 * @param {number} id
 * @param {Date} showdate
 * @param {number} showid
 * 
 * @returns {ShowDateTimeResponse}
 */
export default class ShowDateTimeResponse {
    constructor(id, showDate, showId) {
        this.id = id;
        this.showDate = showDate;
        this.showId = showId;
    }

    /**
     * Creates a ShowDateTime response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowDateTimeResponse}
     */
    static createFrom(json) {
        return new ShowDateTimeResponse(json.id, json.showDate, json.showId);
    }

    /**
     * Creates a collection of ShowDateTime response from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(ShowDateTimeResponse, json);
    }
}