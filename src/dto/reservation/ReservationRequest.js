import BaseModel from "../BaseModel.js";

/**
 * Reservation request
 * 
 * @param {number} id
 * @param {boolean} checkedIn
 * @param {string} username
 * @param {number} showId
 * @param {long[]} seatIds
 * @param {long} showDateId

 * 
 * @returns {ReservationRequest}
 */
export default class ReservationRequest {
    constructor(id, checkedIn, username, showId, seatIds, showDateId) {
        this.id = id;
        this.checkedIn = checkedIn;
        this.username = username;
        this.showId = showId;
        this.seatIds = seatIds;
        this.showDateId = showDateId;
    
    }

    /**
     * Creates a Reservation request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ReservationRequest}
     */
    static createFrom(json) {
        return new ReservationRequest(json.id, json.checkedIn, json.username, json.showId, json.seatIds, json.showDateId);
    }

    /**
     * Creates a collection of Reservation request from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(ReservationRequest, json);
    }
}