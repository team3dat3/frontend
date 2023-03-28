import CouponController from "../../../../controller/CouponController.js";
import {loadAndRender} from "../../../../util/Render.js";

const couponController = new CouponController();

/**
 * Coupon member show
 *  
 * @returns {undefined}
 */
export default function CouponMemberShow(id){
    loadAndRender('src/view/coupon/member/show/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        couponController.findUserCoupon(id, (couponResponse) => {
            const element = document.createElement('div');
            element.innerHTML = JSON.stringify(couponResponse);
            couponWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}