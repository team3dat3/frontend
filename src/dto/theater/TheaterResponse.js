import BaseModel from "../BaseModel.js";

/**
 * Theater response class.
 * 
 * @param {number} id
 * @param {Number[]} seatrowids
 * @param {Number[]} showids
 * 
 * @returns {TheaterResponse}
 */
export default class TheaterResponse {
    constructor(id, seatrowids, showids) {
        this.id = id;
        this.seatrowids = seatrowids;
        this.showids = showids;
    }

    /**
     * Creates a Theater response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {TheaterRequest}
     */
    static createFrom(json) {
        return new TheaterResponse(json.id, json.seatrowids, json.showids);
    }

    /**
     * Creates a collection of Theater response objects from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(TheaterResponse, json);
    }
}