import BaseModel from "../BaseModel.js";

/**
 * Reservation response
 * 
 * @param {number} id
 * @param {boolean} checkedIn
 * 
 * @returns {ReservationResponse}
 */
export default class ReservationResponse {
    constructor(id, checkedIn, username, showId, showMovieTitle, seatIds, showDateTime) {
        this.id = id;
        this.checkedIn = checkedIn;
        this.username = username;
        this.showId = showId;
        this.showMovieTitle = showMovieTitle;
        this.seatIds = seatIds;
        this.showDateTime = showDateTime;
    }

    /**
     * Creates a Reservation response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ReservationResponse}
     */
    static createFrom(json) {
        return new ReservationResponse(
            json.id, 
            json.checkedIn, 
            json.username, 
            json.showId, 
            json.showMovieTitle, 
            json.seatIds,
            json.showDateTime,
            json.theaterName);
    }

    /**
     * Creates a collection of Reservation response from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(ReservationResponse, json);
    }
}