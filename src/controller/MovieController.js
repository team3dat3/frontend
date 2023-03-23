import BaseController from './BaseController';
import Movie from '../model/Movie';

export default class MovieController extends BaseController {

    findAll(callback, error) {
        this.get("/anonymous/movies", (json) => {callback(Movie.createCollectionFrom(json))}, error);
    }

    find(id, callback, error) {
        this.get(`/anonymous/movies/${id}`, (json) => {callback(Movie.createFrom(json))}, error);
    }

    create(movie, callback, error) {
        this.post("/admin/movies", movie, (json) => {callback(Movie.createFrom(json))}, error);
    }

    update(movie, callback, error) {
        this.patch(`/admin/movies`, movie, (json) => {callback(Movie.createFrom(json))}, error);
    }

    delete(movie, callback, error) {
        this.delete(`/admin/movies`, movie, callback, error);
    }
}