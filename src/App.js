import { render } from "./util/Render.js";
import MoviePage from "./view/MoviePage.js";
import ReservationPage from "./view/ReservationPage.js";

import Button from "./components/Button.js";
import Link from "./components/Link.js";

const button = Button({
    type: 'primary',
    text: 'Click me',
    animation: {
        onclick: {
            type: 'jello',
            duration: 800
        }
    }
});

const button2 = Button({
    type: 'primary',
    text: 'Click me',
    animation: {
        onclick: {
            type: 'hinge',
            duration: 800
        }
    }
});

const link = Link({
    type: 'primary',
    text: 'Click me',
    href: '#/movies',
    animation: {
        onclick: {
            type: 'rubberBand',
            duration: 800
        }
    }
});

render([link, button, button2]);
MoviePage();
ReservationPage();
