import BaseModel from "./BaseModel.js";

/**
 * Movie model class.
 * 
 * @param {string} title
 * @param {number} age
 * 
 * @returns {Movie}
 */
export default class Movie {
    constructor(title, age) {
        this.title = title;
        this.age = age;
    }

    /**
     * Creates a Movie object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {Movie}
     */
    static createFrom(json) {
        return new Movie(json.title, json.age);
    }

    /**
     * Creates a collection of Movie objects from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(Movie, json);
    }
}