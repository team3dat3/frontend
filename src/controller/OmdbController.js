import BaseController from './BaseController.js';
import OmdbResponse from '../dto/omdb/OmdbResponse.js';

/**
 * Omdb controller class.
 * 
 * @returns {OmdbController}
 */
export default class OmdbController extends BaseController {

    /**
     * Find movielist
     * @param {string} title
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    searchMovie(title, callback, error) {
        super.get(`/admin/omdb/search/${title}`, (json) => {callback(OmdbResponse.createCollectionFrom(json))}, error);

        
    }


        /**
     * Find movie
     * @param {string} imdbId
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    getMovie(imdbId, callback, error) {
        super.get(`/admin/omdb/get/${imdbId}`, (json) => {callback(OmdbResponse.createFrom(json))}, error);
    }
}