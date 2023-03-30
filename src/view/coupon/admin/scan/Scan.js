import CouponController from "../../../../controller/CouponController.js";
import { loadAndRender } from '../../../../util/Render.js';

const couponController = new CouponController();

/**
 * Achievement admin checkin.
 *  
 * @returns {undefined}
 */
export default function CouponAdminScan(id) {
    // Load and render the reservation admin show template
    loadAndRender('src/view/coupon/admin/scan/template.html', (html) => {

        const wrapper = html.querySelector('#wrapper');

        couponController.scan(id, (couponResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the reservation
            element.innerHTML = `The coupon is ${couponResponse.used ? 
                'used' : 'not used'}`;

            // Append the div element to the reservation HTML element wrapper
            wrapper.appendChild(element);
        }, (error) => {
            const element = document.createElement('div');
            element.innerHTML = "Could not use coupon, please contact the support team.";
            reservationWrapper.appendChild(element);
        });
    });
}