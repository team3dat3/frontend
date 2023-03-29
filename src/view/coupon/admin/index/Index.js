import CouponController from "../../../../controller/CouponController.js";
import {loadAndRender} from "../../../../util/Render.js";
import Card from '../../../../components/Card.js';

const couponController = new CouponController();

/**
 * Coupon member index
 *  
 * @returns {undefined}
 */
export default function CouponAdminIndex() {
    loadAndRender('src/view/coupon/admin/index/template.html', (html) => {

        // Get coupon HTML element wrapper
        const couponWrapper = html.querySelector('#wrapper');

        couponController.findAll((couponResponses) => {
            couponResponses.forEach(coupon => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/coupons/${coupon.id}/edit`,
                    header: `ID: ${coupon.id}`,
                    image: `https://picsum.photos/200/30${coupon.id}`,
                    body: null,
                    footer: null,
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                couponWrapper.appendChild(card);
            });
        }, (error) => {
            console.log(error)
        });
    });
}