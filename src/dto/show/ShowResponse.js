import BaseModel from "../BaseModel.js";

/**
 * Show response
 * 
 * @param {number} id
 * @param {string} movietitle
 * @param {number[]} showdatesids
 * @param {number} price
 * @param {number} theaterid
 * 
 * @returns {ShowResponse}
 */
export default class ShowResponse {
    constructor(id, movieTitle, price, theaterId, theaterName, showDateTimes, showDateTimesIds, poster) {
        this.id = id;
        this.movieTitle = movieTitle;
        this.price = price;
        this.theaterId = theaterId;
        this.theaterName = theaterName;
        this.showDateTimes = showDateTimes;
        this.showDateTimesIds = showDateTimesIds;
        this.poster = poster;
    }

    /**
     * Creates a Show response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowResponse}
     */
    static createFrom(json) {
        return new ShowResponse(
            json.id, 
            json.movieTitle, 
            json.price, 
            json.theaterId,
            json.theaterName,
            json.showDateTimes,
            json.showDateTimesIds,
            json.poster
            );
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