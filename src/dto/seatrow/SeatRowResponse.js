import BaseModel from "../BaseModel.js";

/**
 * SeatRow response class.
 * 
 * @param {number} id
 * @param {Number[]} seatids
 * @param {number} theaterid
 * 
 * @returns {SeatRowResponse}
 */
export default class SeatRowResponse {
    constructor(id, seatids, theaterid) {
        this.id = id;
        this.seatids = seatids;
        this.theaterid = theaterid;
    }

    /**
     * Creates a SeatRow response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {SeatRowRequest}
     */
    static createFrom(json) {
        return new SeatRowResponse(json.id, json.seatids, json.theaterid);
    }

    /**
     * Creates a collection of SeatRow response objects from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(SeatRowResponse, json);
    }
}