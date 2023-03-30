import BaseModel from "../BaseModel.js";

/**
 * Seat request class.
 * 
 * @param {number} id
 * @param {number[]} reservationids
 * @param {number} seatrowid
 * 
 * @returns {SeatRequest}
 */
export default class SeatRequest {
    constructor(id, seatRowId) {
        this.id = id;
        this.seatRowId = seatRowId;
    }

    /**
     * Creates a Seat request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {SeatRequest}
     */
    static createFrom(json) {
        return new SeatRequest(json.id, json.seatRowId);
    }

    /**
     * Creates a collection of Seat request from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(SeatRequest, json);
    }
}