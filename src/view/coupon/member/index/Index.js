import CouponController from "../../../../controller/CouponController.js";
import {loadAndRender} from "../../../../util/Render.js";
import Card from '../../../../components/Card.js';

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

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/member/coupons/${coupon.id}/show`,
                    header: `${coupon.name}`,
                    image: `https://picsum.photos/200/2${coupon.id % 10}`,
                    body: `<p><strong>Cost:</strong> ${coupon.cost}</p><p><strong>Discount:</strong> ${coupon.discount}</p>`,
                    footer: coupon.used ? `<small class="badge success">Used</small>` : '<small class="badge secondary">Not used</small>',
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