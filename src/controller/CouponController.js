import BaseController from './BaseController.js';
import CouponResponse from '../dto/coupon/CouponResponse.js';
import CouponRequest from '../dto/coupon/CouponRequest.js';

export default class CouponController extends BaseController{

    /**
     * @param {function} callback 
     * @param {function} error 
     * 
     * @returns {undefined}
     */
    findAll(callback, error){
        super.get("/admin/coupons", (json) => {callback(CouponResponse.createCollectionFrom(json))}, error);
    }

    /**
     * @param {number} id 
     * @param {function} callback 
     * @param {function} error 
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/admin/coupons/${id}`, (json) => {callback(CouponResponse.createFrom(json))}, error);
    }


    /**
     * @param {CouponRequest} couponRequest 
     * @param {function} callback 
     * @param {function} error
     * 
     * @returns {undefined} 
     */
    create(couponRequest, callback, error){
        super.post("/admin/coupons", couponRequest, (json) => {callback(CouponResponse.createFrom(json))}, error);
    }

    /**
     * @param {CouponRequest} couponRequest 
     * @param {function} callback 
     * @param {function} error
     * 
     * @returns {undefined} 
     */
    update(couponRequest, callback, error){
        super.patch(`/admin/coupons`, couponRequest, (json) => {callback(CouponResponse.createFrom(json))}, error);
    }

    /** 
     * @param {CouponRequest} couponRequest 
     * @param {function} callback 
     * @param {function} error
     * 
     * @returns {undefined} 
     */
    delete(couponRequest, callback, error){
        super.delete(`/admin/coupons`, couponRequest, callback, error);
    }

    /**
     * find all authenticated user's coupons
     * 
     * @param {function} callback 
     * @param {function} error 
     */
    findUserCoupons(callback, error) {
        super.get("/member/coupons", (json) => {callback(CouponResponse.createCollectionFrom(json))}, error);
    }

    /**
     * find authenticated user's coupon by id
     * 
     * @param {number} id
     * @param {function} callback
     * @param {function} error
     */
    findUserCoupon(id, callback, error) {
        super.get(`/member/coupons/${id}`, (json) => {callback(CouponResponse.createFrom(json))}, error);
    }
}