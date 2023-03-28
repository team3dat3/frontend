import BaseModel from "../BaseModel.js";

/**
 * ShowDateTime request
 * 
 * @param {number} id
 * @param {Date} showdate
 * @param {number} showid
 *  
 *
 * 
 * @returns {ShowDateTimeRequest}
 */
export default class ShowDateTimeRequest {
    constructor(id, showdate, showid) {
        this.id = id;
        this.showdate = showdate;
        this.showid = showid;
    }

    /**
     * Creates a ShowDateTime request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowDateTimeRequest}
     */
    static createFrom(json) {
        return new ShowDateTimeRequest(json.id, json.showdate, json.showid);
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