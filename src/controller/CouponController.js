import BaseController from './BaseController.js';
import CouponResponse from '../dto/coupon/CouponResponse';
import CouponRequest from '../dto/coupon/CouponRequest';

export default class CouponController extends BaseController{

    /**
     * @param {function} callback 
     * @param {function} error 
     * 
     * @returns {undefined}
     */
    findAll(callback, error){
        super.get("/anonymous/coupons", (json) => {callback(CouponResponse.createCollectionFrom(json))}, error);
    }

    /**
     * @param {number} id 
     * @param {function} callback 
     * @param {function} error 
     * 
     * @returns {undefined}
     */
    find(id, callback, error) {
        super.get(`/anonymous/coupons/${id}`, (json) => {callback(CouponResponse.createFrom(json))}, error);
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
}