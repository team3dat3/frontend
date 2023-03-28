import BaseModel from "../BaseModel.js";

/**
 * Show response
 * 
 * @param {number} id
 * @param {string} movietitle
 * @param {Number[]} reservationsids
 * @param {Number[]} showdatesids
 * @param {number} price
 * @param {number} theaterid
 * 
 * @returns {ShowResponse}
 */
export default class ShowResponse {
    constructor(id, movietitle, reservationsids, showdatesids, price, theaterid) {
        this.id = id;
        this.movietitle = movietitle;
        this.reservationsids = reservationsids;
        this.showdatesids = showdatesids;
        this.price = price;
        this.theaterid = theaterid;
    }

    /**
     * Creates a Show response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowResponse}
     */
    static createFrom(json) {
        return new ShowResponse(json.id, json.movietitle, json.reservations, json.showdatesids, json.price, json.theaterid);
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