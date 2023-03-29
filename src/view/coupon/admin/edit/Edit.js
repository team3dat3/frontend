import UserController from "../../../../controller/UserController.js";
import CouponController from "../../../../controller/CouponController.js";
import CouponRequest from "../../../../dto/coupon/CouponRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

const userController = new UserController();
const couponController = new CouponController();

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
            html.querySelector('[name="used"]').value = couponResponse.used;
            userController.findAll((userResponses) => {
                userResponses.forEach(user => {
                    const option = document.createElement('option');
                    option.value = user.username;
                    option.innerText = user.username;
                    if (user.id == couponResponse.username) {
                        option.selected = true;
                    }
                    html.querySelector('[name="username"]').appendChild(option);
                });
            }, (error) => {
                console.log(error);
            });
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
                formData.get('username'),
                formData.get('cost'),
                formData.get('used') ? true : false
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
