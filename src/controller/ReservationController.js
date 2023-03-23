import BaseController from './BaseController';
import Reservation from '../model/Reservation';

export default class ReservationController extends BaseController {

    findAll(callback, error) {
        this.get("/anonymous/reservations", (json) => {callback(Reservation.createCollectionFrom(json))}, error);
    }

    find(id, callback, error) {
        this.get(`/anonymous/reservations/${id}`, (json) => {callback(Reservation.createFrom(json))}, error);
    }

    create(reservation, callback, error) {
        this.post("/admin/reservations", reservation, (json) => {callback(Reservation.createFrom(json))}, error);
    }

    update(reservation, callback, error) {
        this.patch(`/admin/reservations`, reservation, (json) => {callback(Reservation.createFrom(json))}, error);
    }

    delete(reservation, callback, error) {
        this.delete(`/admin/reservations`, reservation, callback, error);
    }
}