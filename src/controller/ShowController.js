import BaseController from './BaseController.js';
import ShowRequest from '../dto/show/ShowRequest.js';
import ShowResponse from '../dto/show/ShowResponse.js';

/**
 * Show controller class.
 * 
 * @returns {ShowController}
 */
export default class ShowController extends BaseController {

    /**
     * Find all shows
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/anonymous/shows", (json) => {callback(ShowResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a show by id
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/shows/${id}`, (json) => {callback(ShowResponse.createFrom(json))}, error);
    }

    /**
     * Create a show
     * 
     * @param {ShowRequest} showRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(showRequest, callback, error) {
        super.post("/admin/shows", showRequest, (json) => {callback(ShowResponse.createFrom(json))}, error);
    }

    /**
     * Update a show
     * 
     * @param {ShowRequest} showRequest
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    update(showRequest, callback, error) {
        super.put(`/admin/shows`, showRequest, (json) => {callback(ShowResponse.createFrom(json))}, error);
    }

    /**
     * Delete a show
     *  
     * @param {ShowRequest} showRequest
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    delete(showRequest, callback, error) {
        super.delete(`/admin/shows`, showRequest, callback, error);
    }
}