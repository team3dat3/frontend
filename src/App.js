import { render } from "./util/Render.js";
import MoviePage from "./view/MoviePage.js";
import ReservationPage from "./view/ReservationPage.js";
import "./util/navigo_EditedByLars.js";

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

window.addEventListener("load", async () => {

    const router = new Navigo("/", { hash: true });
    window.router = router
    
    let path = window.location.hash
    if (path == "") { //Do this only for hash
        path = "#/"
        window.history.pushState({}, path, window.location.href + path);
    }

    router
        .hooks({
            before(done, match) {
                //setActiveLink("menu", match.url)
                done()
            }
        })
        .on({
            "/": () => render([link, button, button2]),
            "/movies": MoviePage,
            "/reservations": ReservationPage
        })
        .notFound(() => {
            alert("404");
        })
        .resolve()
});
