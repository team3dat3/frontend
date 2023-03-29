import CouponController from "../../../../controller/CouponController.js";
import CouponRequest from "../../../../dto/coupon/CouponRequest.js";
import { loadAndRender } from "../../../../util/Render.js";
import { showToast } from '../../../../components/Toast.js';

const couponController = new CouponController();

/**
 * Coupon admin create.
 *  
 * @returns {undefined}
 */
export default function CouponAdminCreate() {
    loadAndRender('src/view/coupon/admin/create/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        html.querySelector('#user-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const couponRequest = new CouponRequest(id, "name", "discount", "user", "cost", "used");

            couponController.create(couponRequest, (couponResponse) => {
                window.router.navigate('/admin/coupons');
                showToast('success', `Coupon saved with id: ${couponResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}