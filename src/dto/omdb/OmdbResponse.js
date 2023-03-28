import BaseModel from "../BaseModel.js";

/**
 * OMDB response class.
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
 * @returns {OmdbResponse}
 */
export default class OmdbResponse {
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
     * Creates a Omdb response from a JSON object.
     * 
     * @param {Object} json
     * 
     * @returns {OmdbResponse}
     */
    static createFrom(json) {
        return new OmdbResponse(json.title, json.director, json.actors, json.prodyear, json.agelimit, json.description, json.genre, json.runtime);
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