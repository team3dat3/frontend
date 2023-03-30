import BaseController from './BaseController.js';
import SeatRequest from '../dto/seat/SeatRequest.js';
import SeatResponse from '../dto/seat/SeatResponse.js';

/**
 * Seat controller class.
 * 
 * @returns {SeatController}
 */
export default class SeatController extends BaseController {

    /**
     * Find all seats
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/anonymous/seats", (json) => {callback(SeatResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a seat by id
     *
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/seats/${id}`, (json) => {callback(SeatResponse.createFrom(json))}, error);
    }

    findByTheaterId(theaterId, callback, error) {
        super.get(`/anonymous/seats/${theaterId}/theater`, (json) => {callback(SeatResponse.createFrom(json))}, error);
    }



    /**
     * Create a seat
     *
     * @param {SeatRequest} seatRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(seatRequest, callback, error) {
        super.post("/admin/seats", seatRequest, (json) => {callback(SeatResponse.createFrom(json))}, error);
    }

    /**
     * Update a seat
     *
     * @param {SeatRequest} seatRequest
     * @param {function} callback
     * @param {function} error
     *
     * @returns {undefined} 
     */
    update(seatRequest, callback, error) {
        super.put(`/admin/seats`, seatRequest, (json) => {callback(SeatResponse.createFrom(json))}, error);
    }

    /**
     * Delete a seat
     *
     * @param {SeatRequest} seatRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    delete(seatRequest, callback, error) {
        super.delete("/admin/seats", seatRequest, callback, error);
    }
}