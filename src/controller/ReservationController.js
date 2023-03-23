import BaseController from './BaseController';
import Reservation from '../model/Reservation';

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
        this.get("/anonymous/reservations", (json) => {callback(Reservation.createCollectionFrom(json))}, error);
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
        this.get(`/anonymous/reservations/${id}`, (json) => {callback(Reservation.createFrom(json))}, error);
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
        this.post("/admin/reservations", reservation, (json) => {callback(Reservation.createFrom(json))}, error);
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
        this.patch(`/admin/reservations`, reservation, (json) => {callback(Reservation.createFrom(json))}, error);
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
        this.delete(`/admin/reservations`, reservation, callback, error);
    }
}