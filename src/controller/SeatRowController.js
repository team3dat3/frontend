import BaseController from './BaseController.js';
import SeatRowRequest from '../dto/seatrow/SeatRowRequest.js';
import SeatRowResponse from '../dto/seatrow/SeatRowResponse.js';

/**
 * SeatRow controller class.
 * 
 * @returns {SeatRowController}
 */
export default class SeatRowController extends BaseController {

    /**
     * Find all seatrows
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/anonymous/seatrows", (json) => {callback(SeatRowResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a seatrow by id
     *
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/seatrows/${id}`, (json) => {callback(SeatRowResponse.createFrom(json))}, error);
    }

    /**
     * Create a seatrow
     *
     * @param {SeatRowRequest} seatrowRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(seatrowRequest, callback, error) {
        super.post("/admin/seatrows", seatrowRequest, (json) => {callback(SeatRowResponse.createFrom(json))}, error);
    }

    /**
     * Update a seatrow
     *
     * @param {SeatRowRequest} seatrowRequest
     * @param {function} callback
     * @param {function} error
     *
     * @returns {undefined} 
     */
    update(seatrowRequest, callback, error) {
        super.put(`/admin/seatrows`, seatrowRequest, (json) => {callback(SeatRowResponse.createFrom(json))}, error);
    }

    /**
     * Delete a seatrow
     *
     * @param {SeatRowRequest} seatrowRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    delete(seatrowRequest, callback, error) {
        super.delete("/admin/seatrows", seatrowRequest, callback, error);
    }
}