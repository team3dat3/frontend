import BaseModel from "../BaseModel.js";

/**
 * Movie request class.
 * 
 * @param {string} title
 * @param {string} director
 * @param {String} actors
 * @param {number} prodyear
 * @param {number} agelimit
 * @param {string} description
 * @param {string[]} genre
 * @param {string} runtime
 * 
 * @returns {MovieRequest}
 */
export default class MovieRequest {
    constructor(title, director, actors, prodYear, ageLimit, description, genre, runtime) {
        this.title = title;
        this.director = director;
        this.actors = actors;
        this.prodYear = prodYear;
        this.ageLimit = ageLimit;
        this.description = description;
        this.genre = genre;
        this.runtime = runtime;
    }

    /**
     * Creates a Movie request from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {MovieRequest}
     */
    static createFrom(json) {
        return new MovieRequest(json.title, json.director, json.actors, json.prodYear, json.ageLimit, json.description, json.genre, json.runtime);
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