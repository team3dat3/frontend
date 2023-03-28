import { getAPIKey, hasAPIKey } from './API.js';

export function isAuthenticated() {
    return hasAPIKey();
}

export function hasRole(role) {
    if (!isAuthenticated()) {
        return false;
    }

    const decryptedJWT = decryptJWT(getAPIKey());
    return decryptedJWT.roles.includes(role);
}

export function hasAnyRole(roles) {
    if (!isAuthenticated()) {
        return false;
    }

    const decryptedJWT = decryptJWT(getAPIKey());
    return roles.some(role => decryptedJWT.roles.includes(role));
}

export function getUsername() {
    if (!isAuthenticated()) {
        return '';
    }

    const decryptedJWT = decryptJWT(getAPIKey());
    return decryptedJWT.username;
}

function decryptJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}