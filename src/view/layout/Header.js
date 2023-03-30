import { hasRole, hasAnyRole } from "../../util/Authenticated.js";

/**
 * @type {Array}
 * @private
 */
const adminLinks = [
    { href: "/#/admin/movies", text: "Movies" },
    { href: "/#/admin/theaters", text: "Theaters" },
    { href: "/#/admin/seatrows", text: "Seat rows" },
    { href: "/#/admin/seats", text: "Seats" },
    { href: "/#/admin/reservations", text: "Reservations" },
    { href: "/#/admin/users", text: "Users" },
    { href: "/#/admin/coupons", text: "Coupons" },
    { href: "/#/admin/achievements", text: "Achievements" },
];

/**
 * @type {Array}
 * @private
 */
const memberLinks = [
    { href: "/#/profile", text: "View Profile" },
    { href: "/#/profile/edit", text: "Edit Profile" },
    { href: "/#/member/reservations", text: "Reservations" },
    { href: "/#/member/coupons", text: "Coupons" },
    { href: "/#/member/achievements", text: "Achievements" },
    { href: "/#/logout", text: "Logout" },
];

/**
 * @type {Array}
 * @private
 */
const authenticationLinks = [
    { href: "/#/login", text: "Login" },
    { href: "/#/register", text: "Register" },
];

/**
 * Refresh the header.
 * 
 * @param {Document} document.
 * @returns {undefined}
 */
export function refreshHeader(html) {
    const wrapper = html.querySelector("#main-navigation-ul");

    // Clear the wrapper
    wrapper.innerHTML = "";

    // Add show link
    const showLink = createNavigationElement("/", "Shows");
    wrapper.appendChild(showLink);

    // Add admin links
    if (hasRole("ADMIN")) {
        const adminDropdown = createDropdown("Admin", adminLinks);
        wrapper.appendChild(adminDropdown);
    }

    // Add member links
    if (hasAnyRole(["ADMIN", "MEMBER"])) {
        const memberDropdown = createDropdown("Member", memberLinks);
        wrapper.appendChild(memberDropdown);
    
    // Add authentication links
    } else {
        authenticationLinks.forEach(link => {
            const navigationElement = createNavigationElement(link.href, link.text);
            wrapper.appendChild(navigationElement);
        });
    }

    // Add about link
    const aboutLink = createNavigationElement("/#/about", "About");
    wrapper.appendChild(aboutLink);

    // Add contact link
    const contactLink = createNavigationElement("/#/contact", "Contact");
    wrapper.appendChild(contactLink);
}

/**
 * Create a navigation element.
 * 
 * @param {string} title
 * @param {Object[]} links
 * 
 * @returns {HTMLLIElement}
 */
function createDropdown(title, links) {
    const li = document.createElement("li");
    li.classList.add("dropdown");

    const a = document.createElement("a");
    a.innerText = title;

    const div = document.createElement("div");
    div.classList.add("dropdown-content");

    const ul = document.createElement("ul");
    links.forEach(link => {
        const navigationElement = createNavigationElement(link.href, link.text);
        ul.appendChild(navigationElement);
    });

    div.appendChild(ul);

    li.appendChild(a);
    li.appendChild(div);
    return li;
}

/**
 * Create a navigation element.
 * 
 * @param {string} href
 * @param {string} text
 * 
 * @returns {HTMLLIElement}
 */
function createNavigationElement(href, text) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.innerText = text;
    a.setAttribute("data-navigo", "");
    li.appendChild(a);
    return li;
}
