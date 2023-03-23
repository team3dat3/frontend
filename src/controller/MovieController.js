import BaseController from './BaseController';
import Movie from '../model/Movie';

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
        this.get("/anonymous/movies", (json) => {callback(Movie.createCollectionFrom(json))}, error);
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
        this.get(`/anonymous/movies/${id}`, (json) => {callback(Movie.createFrom(json))}, error);
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
        this.post("/admin/movies", movie, (json) => {callback(Movie.createFrom(json))}, error);
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
        this.patch(`/admin/movies`, movie, (json) => {callback(Movie.createFrom(json))}, error);
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
        this.delete(`/admin/movies`, movie, callback, error);
    }
}