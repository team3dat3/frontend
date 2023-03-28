import BaseModel from "../BaseModel.js";

/**
 * Seat response class.
 * 
 * @param {number} id
 * @param {Number[]} reservationids
 * @param {number} seatrowid
 * 
 * @returns {SeatResponse}
 */
export default class SeatResponse {
    constructor(id, reservationids, seatrowid) {
        this.id = id;
        this.reservationids = reservationids;
        this.seatrowid = seatrowid;
    }

    /**
     * Creates a Seat response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {SeatRequest}
     */
    static createFrom(json) {
        return new SeatResponse(json.id, json.reservationids, json.seatrowid);
    }

    /**
     * Creates a collection of Seat response objects from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(SeatResponse, json);
    }
}