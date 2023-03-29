import CouponController from "../../../../controller/CouponController.js";
import {loadAndRender} from "../../../../util/Render.js";

const couponController = new CouponController();

/**
 * Coupon member index
 *  
 * @returns {undefined}
 */
export default function CouponMemberIndex() {
    loadAndRender('src/view/coupon/member/index/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        couponController.findUserCoupons((couponResponses) => {
            couponResponses.forEach(coupon => {
                const element = document.createElement('div');
                element.innerHTML = JSON.stringify(coupon);
                couponWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error)
        });
    });
}