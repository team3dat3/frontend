import CouponController from "../../../../controller/CouponController";
import {loadAndRender} from "../../../../util/Render.js";

const CouponController = new CouponController();

export default function CouponMemberShow(id){
    loadAndRender('src/view/coupon/member/show/template.html', (html) => {
        const couponWrapper = html.querySelector('#wrapper');

        CouponController.find(id, (couponResponse) => {
            const element = document.createElement('div');
            element.innerHTML = JSON.stringify(couponResponse);
            couponWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}