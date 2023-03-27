import BaseModel from "../BaseModel.js";

/**
 * Show request
 * 
 * @param {number} id
 * @param {string} movietitle
 * @param {Number[]} reservationsids
 * @param {Number[]} showdatesids
 * @param {number} price
 * @param {number} theaterid
 *  
 *
 * 
 * @returns {ShowRequest}
 */
export default class ShowRequest {
    constructor(id, movietitle, reservationsids, showdatesids, price, theaterid) {
        this.id = id;
        this.movietitle = movietitle;
        this.reservationsids = reservationsids;
        this.showdatesids = showdatesids;
        this.price = price;
        this.theaterid = theaterid;
    }

    /**
     * Creates a Show request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {ShowRequest}
     */
    static createFrom(json) {
        return new ShowRequest(json.id, json.movietitle, json.reservations, json.showdatesids, json.price, json.theaterid);
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