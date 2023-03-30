import CouponController from "../../../../controller/CouponController.js";
import CouponRequest from "../../../../dto/coupon/CouponRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const couponController = new CouponController();

/**
 * The username of the user owning the coupon.
 * 
 * @type {string}
 * @private
 */
let username = null;

/**
 * Coupon admin edit.
 *  
 * @returns {undefined}
 */
export default function CouponAdminEdit(id) {
    loadAndRender('src/view/coupon/admin/edit/template.html', (html) => {

        couponController.find(id, (couponResponse) => {
            html.querySelector('[name="name"]').value = couponResponse.name;
            html.querySelector('[name="discount"]').value = couponResponse.discount;
            html.querySelector('[name="cost"]').value = couponResponse.cost;
            html.querySelector('[name="used"]').checked = couponResponse.used;
            html.querySelector('[name="username"]').value = couponResponse.username;
            username = couponResponse.username;
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
                username,
                formData.get('cost'),
                formData.get('used') == null ? false : true
            );

            couponController.update(couponRequest, (couponResponse) => {
                window.router.navigate('/admin/coupons');
                showToast('success', 'Coupon updated successfully.', 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}
