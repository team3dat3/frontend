import BaseModel from "../BaseModel.js";

/**
 * Movie response class.
 * 
 * @param {string} title
 * @param {number} age
 * 
 * @returns {MovieResponse}
 */
export default class MovieResponse {
    constructor(title, age) {
        this.title = title;
        this.age = age;
    }

    /**
     * Creates a Movie response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {MovieRequest}
     */
    static createFrom(json) {
        return new MovieResponse(json.title, json.age);
    }

    /**
     * Creates a collection of Movie response objects from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(MovieResponse, json);
    }
}