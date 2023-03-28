import BaseController from './BaseController.js';
import OmdbResponse from '../dto/movie/OmdbResponse.js';

/**
 * Omdb controller class.
 * 
 * @returns {OmdbController}
 */
export default class OmdbController extends BaseController {

    /**
     * Find movie
     * @param {string} title
     * @param {number} year
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findMovie(title, year, callback, error) {
        super.get(`/v1/omdb/${title}/${year}`, (json) => {callback(OmdbResponse.createCollectionFrom(json))}, error);
    }
}