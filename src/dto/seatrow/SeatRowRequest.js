import BaseModel from "../BaseModel.js";

/**
 * SeatRow request class.
 * 
 * @param {number} id
 * @param {number[]} seatids
 * @param {number} theaterid
 * 
 * @returns {SeatRowRequest}
 */
export default class SeatRowRequest {
    constructor(id, seatIds, theaterId) {
        this.id = id;
        this.seatIds = seatIds;
        this.theaterId = theaterId;
    }

    /**
     * Creates a SeatRow request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {SeatRowRequest}
     */
    static createFrom(json) {
        return new SeatRowRequest(json.id, json.seatIds, json.theaterId);
    }

    /**
     * Creates a collection of SeatRow request from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(SeatRowRequest, json);
    }
}