import BaseModel from "../BaseModel.js";

/**
 * Theater request class.
 * 
 * @param {number} id
 * @param {number[]} seatrowids
 * @param {number[]} showids
 * 
 * @returns {TheaterRequest}
 */
export default class TheaterRequest {
    constructor(id, seatrowids, showids) {
        this.id = id;
        this.seatrowids = seatrowids;
        this.showids = showids;
    }

    /**
     * Creates a Theater request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {TheaterRequest}
     */
    static createFrom(json) {
        return new TheaterRequest(json.id, json.seatrowids, json.showids);
    }

    /**
     * Creates a collection of Theater request from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(TheaterRequest, json);
    }
}