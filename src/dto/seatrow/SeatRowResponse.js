import BaseModel from "../BaseModel.js";

/**
 * SeatRow response class.
 * 
 * @param {number} id
 * @param {number[]} seatids
 * @param {number} theaterid
 * 
 * @returns {SeatRowResponse}
 */
export default class SeatRowResponse {
    constructor(id, seatIds, theaterId, theaterName) {
        this.id = id;
        this.seatids = seatIds;
        this.theaterId = theaterId;
        this.theaterName = theaterName;
    }

    /**
     * Creates a SeatRow response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {SeatRowRequest}
     */
    static createFrom(json) {
        return new SeatRowResponse(json.id, json.seatIds, json.theaterId, json.theaterName);
    }

    /**
     * Creates a collection of SeatRow response objects from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(SeatRowResponse, json);
    }
}