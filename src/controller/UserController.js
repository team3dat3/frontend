import BaseController from './BaseController.js';
import UserRequest from '../dto/user/UserRequest.js';
import UserResponse from '../dto/user/UserResponse.js';

/**
 * User controller class
 */
export default class UserController extends BaseController {
    /**
     * Find all users
     * @param {function} callback
     * @param {function} error
     * @returns {undefined} 
     */
    findAll(callback, error) {
        super.get("/admin/users", (json) => { callback(UserResponse.createCollectionsFrom(json)) }, error);
    }

    /**
     * Find user username
     * @param {string} username
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    find(username, callback, error) {
        super.get(`/admin/users/${username}`, (json) => { callback(UserResponse.createFrom(json)) }, error);
    }

    /**
     * Create user
     * 
     * @param {UserRequest} UserRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    create(userRequest, callback, error) {
        super.post("/admin/users", userRequest, (json) => { callback(UserResponse.createFrom(json)) }, error);
    }

    /**
     * Update user
     * 
     * @param {UserRequest} userRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    update(userRequest, callback, error) {
        super.put(`/admin/users`, userRequest, (json) => { callback(UserResponse.createFrom(json)) }, error);
    }

    /**
     * Delete user
     * 
     * @param {UserRequest} userRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    delete(userRequest, callback, error) {
        super.delete(`/admin/users`, userRequest, callback, error);
    }

    /**
     * Register user
     * Special endpoint for public users
     * 
     * @param {UserRequest} UserRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    register(userRequest, callback, error) {
        super.post("/register", userRequest, (json) => { callback(UserResponse.createFrom(json)) }, error);
    }

    /**
     * find authenticated user
     * 
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    findAuthenticatedUser(callback, error) {
        super.get("/member/users", (json) => { callback(UserResponse.createFrom(json)) }, error);
    }

    /**
     * Update authenticated user
     * 
     * @param {UserRequest} userRequest
     * @param {function} callback
     * @param {function} error
     * 
     * @returns {undefined}
     */
    updateAuthenticatedUser(userRequest, callback, error) {
        super.put("/member/users", userRequest, (json) => { callback(UserResponse.createFrom(json)) }, error);
    }
}