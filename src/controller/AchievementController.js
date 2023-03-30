import BaseController from './BaseController.js';
import AchievementResponse from '../dto/achievement/AchievementResponse.js';

export default class AchievementController extends BaseController {

    /**
     * @param {function} callback 
     * @param {function} error 
     * 
     * @returns {undefined}
     */
    findAll(callback, error) {
        super.get("/admin/achievements", (json) => { callback(AchievementResponse.createCollectionFrom(json)) }, error);
    }

    /**
     * @param {number} id 
     * @param {function} callback 
     * @param {function} error 
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/admin/achievements/${id}`, (json) => { callback(AchievementResponse.createFrom(json)) }, error);
    }

    /**
     * @param {AchievementRequest} achievementRequest 
     * @param {function} callback 
     * @param {function} error
     * 
     * @returns {undefined} 
     */
    create(achievementRequest, callback, error) {
        super.post("/admin/achievements", achievementRequest, (json) => { callback(AchievementResponse.createFrom(json)) }, error);
    }

    /**
     * @param {AchievementRequest} achievementRequest 
     * @param {function} callback 
     * @param {function} error
     * 
     * @returns {undefined} 
     */
    update(achievementRequest, callback, error) {
        super.put(`/admin/achievements`, achievementRequest, (json) => { callback(AchievementResponse.createFrom(json)) }, error);
    }

    /** 
     * @param {AchievementRequest} achievementRequest 
     * @param {function} callback 
     * @param {function} error
     * 
     * @returns {undefined} 
     */
    delete(achievementRequest, callback, error) {
        super.delete(`/admin/achievements`, achievementRequest, callback, error);
    }

    /**
     * find all authenticated user's achievements
     * 
     * @param {function} callback 
     * @param {function} error 
     */
    findUserAchievements(callback, error) {
        super.get("/member/achievements", (json) => { callback(AchievementResponse.createCollectionFrom(json)) }, error);
    }

    /**
     * find authenticated user's achievement by id
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     */
    findUserAchievement(id, callback, error) {
        super.get(`/member/achievements/${id}`, (json) => { callback(AchievementResponse.createFrom(json)) }, error);
    }
}