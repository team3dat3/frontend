import BaseController from './BaseController.js';
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
        super.get("/admin/reservations", (json) => {callback(ReservationResponse.createCollectionFrom(json))}, error);
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
        super.get(`/admin/reservations/${id}`, (json) => {callback(ReservationResponse.createFrom(json))}, error);
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
        super.put(`/admin/reservations`, reservationRequest, (json) => {callback(ReservationResponse.createFrom(json))}, error);
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

    /**
     * Checkin a reservation
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    checkin(id, callback, error) {
        super.get(`/admin/reservations/${id}/checkin`, (json) => {callback(ReservationResponse.createFrom(json))}, error);
    }

    /**
     * Find all reservations for the authenticated user
     * 
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findUserReservations(callback, error) {
        super.get("/member/reservations", (json) => {callback(ReservationResponse.createCollectionFrom(json))}, error);
    }

    /**
     * Find a reservation by id for the authenticated user
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findUserReservation(id, callback, error) {
        super.get(`/member/reservations/${id}`, (json) => {callback(ReservationResponse.createFrom(json))}, error);
    }

    /**
     * Create a reservation for the authenticated user
     * 
     * @param {ReservationRequest} reservationRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    createUserReservation(reservationRequest, callback, error) {
        super.post("/member/reservations", reservationRequest, (json) => {callback(ReservationResponse.createFrom(json))}, error);
    }
}