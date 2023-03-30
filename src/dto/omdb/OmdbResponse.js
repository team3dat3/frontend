import BaseModel from "../BaseModel.js";

/**
 * OMDB response class.
 * 
 * @param {string} title
 * @param {string} director
 * @param {String} actors
 * @param {number} year //prodYear for movie
 * @param {string} rated
 * @param {string} description
 * @param {string} genre
 * @param {string} runtime
 * @param {string} imdbId
 * 
 * @returns {OmdbResponse}
 */
export default class OmdbResponse {
    constructor(title, director, actors, year, rated, description, genre, runtime, imdbId) {
        this.title = title;
        this.director = director;
        this.actors = actors;
        this.year = year;
        this.rated = rated;
        this.description = description;
        this.genre = genre;
        this.runtime = runtime;
        this.imdbId = imdbId;
    }

    /**
     * Creates a Omdb response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {OmdbResponse}
     */
    static createFrom(json) {
        return new OmdbResponse(json.title, json.director, json.actors, json.year, json.rated, json.description, json.genre, json.runtime, json.imdbId);
    }

    /**
     * Creates a collection of Omdb response from a JSON array.
     *  
     * @param {Array} json
     *  
     * @returns {Array}
     */
    static createCollectionFrom(json) {
        return BaseModel.createCollectionFrom(OmdbResponse, json);
    }
}