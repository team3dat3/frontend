import BaseModel from "../BaseModel.js";

/**
 * Reservation response
 * 
 * @param {number} id
 * @param {string} movieTitle
 * @param {number[]} reservations
 * @param {number[]} showDates
 * @param {number} price
 * @param {number} theaterId
 * 
 * @returns {ReservationResponse}
 */
export default class ReservationResponse {
    constructor(id, movieTitle, reservations, showDates, price, theaterId) {
        this.id = id;
        this.movieTitle = movieTitle;
        this.reservations = reservations;
        this.showDates = showDates;
        this.price = price;
        this.theaterId = theaterId;
    }

    /**
     * Creates a Show response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowResponse}
     */
    static createFrom(json) {
        return new ShowResponse(json.id, json.movieTitle, json.reservations, json.showDates, json.price, json.theaterId);
    }

    /**
     * Creates a collection of Show response from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(ShowResponse, json);
    }
}