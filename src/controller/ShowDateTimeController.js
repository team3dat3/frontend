import BaseController from './BaseController.js';
import ShowDatetimeRequest from '../dto/showDateTime/ShowDateTimeRequest.js';
import ShowDateTimeResponse from '../dto/showDateTime/ShowDateTimeResponse.js';

/**
 * Show controller class.
 * 
 * @returns {ShowDateTimeController}
 */
export default class ShowDateTimeController extends BaseController {

    /**
     * Find all showdates
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/anonymous/showdates", (json) => {callback(ShowDateTimeResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a showdates by id
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/showdates/${id}`, (json) => {callback(ShowDateTimeResponse.createFrom(json))}, error);
    }

    /**
     * Create a showdate
     * 
     * @param {ShowDatetimeRequest} showDateTimeRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(showDateTimeRequest, callback, error) {
        super.post("/admin/showdates", showDateTimeRequest, (json) => {callback(ShowDateTimeResponse.createFrom(json))}, error);
    }

    /**
     * Update a showdate
     * 
     * @param {ShowDatetimeRequest} showDateTimeRequest
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    update(showDateTimeRequest, callback, error) {
        super.put(`/admin/showdates`, showDateTimeRequest, (json) => {callback(ShowDateTimeResponse.createFrom(json))}, error);
    }

    /**
     * Delete a showdate
     *  
     * @param {ShowDatetimeRequest} showDateTimeRequest
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    delete(showDateTimeRequest, callback, error) {
        super.delete(`/admin/showdates`, showDateTimeRequest, callback, error);
    }
}