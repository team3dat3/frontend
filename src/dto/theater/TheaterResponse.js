import BaseModel from "../BaseModel.js";

/**
 * Theater response class.
 * 
 * @param {number} id
 * @param {string} name
 * @param {number[]} seatRowIds
 * 
 * @returns {TheaterResponse}
 */
export default class TheaterResponse {
    constructor(id, name, seatRowIds) {
        this.id = id;
        this.name = name;
        this.seatRowIds = seatRowIds || [];
    }

    /**
     * Creates a Theater response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {TheaterRequest}
     */
    static createFrom(json) {
        return new TheaterResponse(json.id, json.name, json.seatRowIds);
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