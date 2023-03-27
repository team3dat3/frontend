import BaseController from './BaseController.js';
import ReservationRequest from '../dto/reservation/ReservationRequest.js';
import ReservationResponse from '../dto/reservation/ReservationResponse.js';

/**
 * Reservation controller class.
 * 
 * @returns {ReservationController}
 */
export default class ReservationController extends BaseController {

    /**
     * Find all reservations
     *
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/anonymous/reservations", (json) => {callback(ReservationResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a reservation by id
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/reservations/${id}`, (json) => {callback(ReservationResponse.createFrom(json))}, error);
    }

    /**
     * Create a reservation
     * 
     * @param {ReservationRequest} reservationRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(reservationRequest, callback, error) {
        super.post("/admin/reservations", reservationRequest, (json) => {callback(ReservationResponse.createFrom(json))}, error);
    }

    /**
     * Update a reservation
     * 
     * @param {ReservationRequest} reservationRequest
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    update(reservationRequest, callback, error) {
        super.patch(`/admin/reservations`, reservationRequest, (json) => {callback(ReservationResponse.createFrom(json))}, error);
    }

    /**
     * Delete a reservation
     *  
     * @param {ReservationRequest} reservationRequest
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    delete(reservationRequest, callback, error) {
        super.delete(`/admin/reservations`, reservationRequest, callback, error);
    }
}