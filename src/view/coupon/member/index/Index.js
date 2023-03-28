import CouponController from "../../../../controller/CouponController";
import {loadAndRender} from "../../../../util/Render.js";

const couponController = new CouponController();

export default function CouponAdminIndex(){
    loadAndRender('src/view/seat/member/index/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        couponController.findAll((couponResponses) => {
            couponResponses.forEach(coupon => {
                const element = document.createElement('div');
                element.innerHTML = JSON.stringify(coupon);
                couponWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error)
        });
    });
}