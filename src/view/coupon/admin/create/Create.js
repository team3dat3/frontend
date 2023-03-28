import CouponController from "../../../../controller/CouponController";
import CouponRequest from "../../../../dto/coupon/CouponRequest";
import {loadAndRender} from "../../../../util/Render.js";

const CouponController = new CouponController();

export default function CouponAdminCreate(){
    loadAndRender('src/view/coupon/create/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        html.querySelector('#user-form').addEventListener('submit', (event) => {
            event.preventDefault();

            const couponRequest = new CouponRequest(id, name, discount, user, cost, used);

            CouponController.create(couponRequest, (couponResponses) => {
                couponResponses.forEach(coupon => {
                    const element = document.createElement('div');
                    element.innerHTML = JSON.stringify(coupon);
                    couponWrapper.appendChild(element);
                });
            }, (error) => {
                console.log(error);
            });
        });
    });
}