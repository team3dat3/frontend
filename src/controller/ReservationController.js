import BaseController from './BaseController.js';
import Reservation from '../model/Reservation.js';

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
        super.get("/anonymous/reservations", (json) => {callback(Reservation.createCollectionFrom(json))}, error);
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
        super.get(`/anonymous/reservations/${id}`, (json) => {callback(Reservation.createFrom(json))}, error);
    }

    /**
     * Create a reservation
     * 
     * @param {Reservation} reservation
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(reservation, callback, error) {
        super.post("/admin/reservations", reservation, (json) => {callback(Reservation.createFrom(json))}, error);
    }

    /**
     * Update a reservation
     * 
     * @param {Reservation} reservation
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    update(reservation, callback, error) {
        super.patch(`/admin/reservations`, reservation, (json) => {callback(Reservation.createFrom(json))}, error);
    }

    /**
     * Delete a reservation
     *  
     * @param {Reservation} reservation
     * @param {function} callback
     * @param {function} error
     *  
     * @returns {undefined}
     */
    delete(reservation, callback, error) {
        super.delete(`/admin/reservations`, reservation, callback, error);
    }
}