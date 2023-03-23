
/**
 * Reservation model
 * 
 * @param {number} id
 * @param {boolean} checkedIn
 * 
 * @returns {Reservation}
 */
export default class Reservation {
    constructor(id, checkedIn) {
        this.id = id;
        this.checkedIn = checkedIn;
    }

    /**
     * Creates a Reservation object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {Reservation}
     */
    static createFrom(json) {
        return new Reservation(json.id, json.checkedIn);
    }

    /**
     * Creates a collection of Reservation objects from a JSON array.
     *
     * @param {Array} json
     * 
     * @returns {Array}
     */ 
    static createCollectionFrom(json) {
        const collection = [];
        for (let i = 0; i < json.length; i++) {
            collection.push(Reservation.createFrom(json[i]));
        }
        return collection;
    }
}