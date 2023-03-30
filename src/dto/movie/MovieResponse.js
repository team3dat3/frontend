import BaseModel from "../BaseModel.js";

/**
 * Movie response class.
 * 
 * @param {string} title
 * @param {string} director
 * @param {string} actors
 * @param {number} prodYear
 * @param {string} rated
 * @param {string} description
 * @param {string[]} genre
 * @param {string} runtime
 * 
 * @returns {MovieResponse}
 */
export default class MovieResponse {
    constructor(title, director, actors, prodYear, rated, description, genre, runtime, poster) {
        this.title = title;
        this.director = director;
        this.actors = actors;
        this.prodYear = prodYear;
        this.rated = rated;
        this.description = description;
        this.genre = genre;
        this.runtime = runtime;
        this.poster = poster;
    }

    /**
     * Creates a Movie response object from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {MovieRequest}
     */
    static createFrom(json) {
        return new MovieResponse(
            json.title, 
            json.director, 
            json.actors, 
            json.prodYear, 
            json.rated, 
            json.description, 
            json.genre, 
            json.runtime,
            json.poster);
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