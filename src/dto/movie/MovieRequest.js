import BaseModel from "../BaseModel.js";

/**
 * Movie request class.
 * 
 * @param {string} title
 * @param {number} age
 * 
 * @returns {MovieRequest}
 */
export default class MovieRequest {
    constructor(title, age) {
        this.title = title;
        this.age = age;
    }

    /**
     * Creates a Movie request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {MovieRequest}
     */
    static createFrom(json) {
        return new MovieRequest(json.title, json.age);
    }

    /**
     * Creates a collection of Movie request from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(MovieRequest, json);
    }
}