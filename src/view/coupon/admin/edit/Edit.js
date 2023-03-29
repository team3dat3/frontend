import CouponController from "../../../../controller/CouponController.js";
import CouponRequest from "../../../../dto/coupon/CouponRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

const couponController = new CouponController();

/**
 * Coupon admin edit.
 *  
 * @returns {undefined}
 */
export default function CouponAdminEdit(id) {
    loadAndRender('src/view/coupon/admin/edit/template.html', (html) => {

        couponController.find(id, (couponResponse) => {
            console.log(couponResponse);
        }, (error) => {
            console.log(error);
        });

        const form = html.querySelector('#coupon-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            const couponRequest = new CouponRequest(
                id, 
                formData.get('name'),
                formData.get('discount'),
                formData.get('user'),
                formData.get('cost'),
                formData.get('used')
            );

            couponController.update(couponRequest, (couponResponse) => {
                window.router.navigate('/admin/coupons');
            }, (error) => {
                console.log(error);
            });
        });
    });
}
