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
        // find qrcode element within the template
        const qrcodeWrapper = html.querySelector('#qrcode');

        // Create and render a new QRCode
        new QRCode(qrcodeWrapper, `https://bergandersen.com/admin/coupons/${id}/scan`);

        const couponWrapper = html.querySelector('#wrapper');

        couponController.findUserCoupon(id, (couponResponse) => {

            html.querySelector('#coupon-name').innerHTML = couponResponse.name;
            html.querySelector('#coupon-username').innerHTML = couponResponse.username;
            html.querySelector('#coupon-cost').innerHTML = couponResponse.cost;
            html.querySelector('#coupon-discount').innerHTML = couponResponse.discount;

            // Create a new div element
            const badge = document.createElement('div');
            badge.innerHTML = couponResponse.used ? 'Used' : 'Not used';
            badge.classList.add('badge');
            badge.classList.add(couponResponse.used ? 'success' : 'secondary');
            html.querySelector('.page-header').appendChild(badge);

            const element = document.createElement('div');
            element.innerHTML = JSON.stringify(couponResponse);
            couponWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}