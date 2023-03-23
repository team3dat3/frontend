import BaseController from './BaseController.js';
import Movie from '../model/Movie.js';

/**
 * Movie controller class.
 * 
 * @returns {MovieController}
 */
export default class MovieController extends BaseController {

    /**
     * Find all movies
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/anonymous/movies", (json) => {callback(Movie.createCollectionFrom(json))}, error);
    }

    /**
     * Find a movie by id
     *
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/movies/${id}`, (json) => {callback(Movie.createFrom(json))}, error);
    }

    /**
     * Create a movie
     *
     * @param {Movie} movie
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(movie, callback, error) {
        super.post("/admin/movies", movie, (json) => {callback(Movie.createFrom(json))}, error);
    }

    /**
     * Update a movie
     *
     * @param {Movie} movie
     * @param {function} callback
     * @param {function} error
     *
     * @returns {undefined} 
     */
    update(movie, callback, error) {
        super.patch(`/admin/movies`, movie, (json) => {callback(Movie.createFrom(json))}, error);
    }

    /**
     * Delete a movie
     *
     * @param {Movie} movie
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    delete(movie, callback, error) {
        super.delete("/admin/movies", movie, callback, error);
    }
}