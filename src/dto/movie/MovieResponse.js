import BaseModel from "../BaseModel.js";

/**
 * Movie response class.
 * 
 * @param {string} title
 * @param {string} director
 * @param {string} actors
 * @param {number} prodyear
 * @param {number} agelimit
 * @param {string} description
 * @param {string[]} genre
 * @param {string} runtime
 * 
 * @returns {MovieResponse}
 */
export default class MovieResponse {
    constructor(title, director, actors, prodyear, agelimit, description, genre, runtime) {
        this.title = title;
        this.director = director;
        this.actors = actors;
        this.prodyear = prodyear;
        this.agelimit = agelimit;
        this.description = description;
        this.genre = genre;
        this.runtime = runtime;
    }

    /**
     * Creates a Movie response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {MovieRequest}
     */
    static createFrom(json) {
        return new MovieResponse(json.title, json.director, json.actors, json.prodyear, json.agelimit, json.description, json.genre, json.runtime);
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