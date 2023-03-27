import BaseModel from "../BaseModel.js";

/**
 * Reservation request
 * 
 * @param {number} id
 * @param {boolean} checkedIn
 * 
 * @returns {ReservationRequest}
 */
export default class ReservationRequest {
    constructor(id, checkedIn) {
        this.id = id;
        this.checkedIn = checkedIn;
    }

    /**
     * Creates a Reservation request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ReservationRequest}
     */
    static createFrom(json) {
        return new ReservationRequest(json.id, json.checkedIn);
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