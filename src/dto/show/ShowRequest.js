import BaseModel from "../BaseModel.js";

/**
 * Show request
 * 
 * @param {number} id
 * @param {string} movieTitle
 * @param {number[]} reservations
 * @param {number[]} showDates
 * @param {number} price
 * @param {number} theaterId
 *  
 *
 * 
 * @returns {ShowRequest}
 */
export default class ShowRequest {
    constructor(id, movieTitle, reservations, showDates, price, theaterId) {
        this.id = id;
        this.movieTitle = movieTitle;
        this.reservations = reservations;
        this.showDates = showDates;
        this.price = price;
        this.theaterId = theaterId;
    }

    /**
     * Creates a Show request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowRequest}
     */
    static createFrom(json) {
        return new ShowRequest(json.id, json.movieTitle, json.reservations, json.showDates, json.price, json.theaterId);
    }

    /**
     * Creates a collection of Show request from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(ShowRequest, json);
    }
}