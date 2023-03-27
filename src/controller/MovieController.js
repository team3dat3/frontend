import BaseController from './BaseController.js';
import MovieRequest from '../model/MovieRequest.js';
import MovieResponse from '../model/MovieResponse.js';

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
        super.get("/anonymous/movies", (json) => {callback(MovieResponse.createCollectionFrom(json))}, error);
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
        super.get(`/anonymous/movies/${id}`, (json) => {callback(MovieResponse.createFrom(json))}, error);
    }

    /**
     * Create a movie
     *
     * @param {MovieRequest} movieRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(movieRequest, callback, error) {
        super.post("/admin/movies", movieRequest, (json) => {callback(MovieResponse.createFrom(json))}, error);
    }

    /**
     * Update a movie
     *
     * @param {MovieRequest} movieRequest
     * @param {function} callback
     * @param {function} error
     *
     * @returns {undefined} 
     */
    update(movieRequest, callback, error) {
        super.patch(`/admin/movies`, movieRequest, (json) => {callback(MovieResponse.createFrom(json))}, error);
    }

    /**
     * Delete a movie
     *
     * @param {MovieRequest} movieRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    delete(movieRequest, callback, error) {
        super.delete("/admin/movies", movieRequest, callback, error);
    }
}