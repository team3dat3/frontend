import CouponController from "../../../../controller/CouponController.js";
import CouponRequest from "../../../../dto/coupon/CouponRequest.js";
import {loadAndRender} from "../../../../util/Render.js";

const couponController = new CouponController();

/**
 * Coupon admin create.
 *  
 * @returns {undefined}
 */
export default function CouponAdminCreate() {
    loadAndRender('src/view/coupon/create/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        html.querySelector('#user-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const couponRequest = new CouponRequest(id, "name", "discount", "user", "cost", "used");

            couponController.create(couponRequest, (couponResponses) => {
                couponResponses.forEach(coupon => {
                    const element = document.createElement('div');
                    element.innerHTML = JSON.stringify(coupon);
                    couponWrapper.appendChild(element);
                });
            }, (error) => {
                console.log(error);
            });
        });
    });
}