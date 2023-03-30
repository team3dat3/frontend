import UserController from "../../../../controller/UserController.js";
import CouponController from "../../../../controller/CouponController.js";
import CouponRequest from "../../../../dto/coupon/CouponRequest.js";
import { loadAndRender } from "../../../../util/Render.js";
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();
const couponController = new CouponController();

/**
 * Coupon admin create.
 *  
 * @returns {undefined}
 */
export default function CouponAdminCreate() {
    loadAndRender('src/view/coupon/admin/create/template.html', (html) => {

        userController.findAll((userResponses) => {
            userResponses.forEach(user => {
                const option = document.createElement('option');
                option.value = user.username;
                option.innerText = user.username;
                html.querySelector('[name="username"]').appendChild(option);
            });
        }, (error) => {
            console.log(error);
        });

        const form = html.querySelector('#coupon-form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            

            // Get form data
            const formData = new FormData(form);
            const couponRequest = new CouponRequest(
                0, 
                formData.get('name'),
                formData.get('discount'),
                formData.get('username'),
                formData.get('cost'),
                formData.get('used') == 'on' ? true : false);

            couponController.create(couponRequest, (couponResponse) => {
                window.router.navigate('/admin/coupons');
                showToast('success', `Coupon saved with id: ${couponResponse.id}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}