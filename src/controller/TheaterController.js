import BaseController from './BaseController.js';
import TheaterRequest from '../dto/theater/TheaterRequest.js';
import TheaterResponse from '../dto/theater/TheaterResponse.js';

/**
 * Theater controller class.
 * 
 * @returns {TheaterController}
 */
export default class TheaterController extends BaseController {

    /**
     * Find all theaters
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/admin/theaters", (json) => {callback(TheaterResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a theater by id
     *
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/admin/theaters/${id}`, (json) => {callback(TheaterResponse.createFrom(json))}, error);
    }

    /**
     * Create a theater
     *
     * @param {TheaterRequest} theaterRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(theaterRequest, callback, error) {
        super.post("/admin/theaters", theaterRequest, (json) => {callback(TheaterResponse.createFrom(json))}, error);
    }

    /**
     * Update a theater
     *
     * @param {TheaterRequest} theaterRequest
     * @param {function} callback
     * @param {function} error
     *
     * @returns {undefined} 
     */
    update(theaterRequest, callback, error) {
        super.patch(`/admin/theaters`, theaterRequest, (json) => {callback(TheaterResponse.createFrom(json))}, error);
    }

    /**
     * Delete a theater
     *
     * @param {TheaterRequest} theaterRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    delete(theaterRequest, callback, error) {
        super.delete("/admin/theaters", theaterRequest, callback, error);
    }
}