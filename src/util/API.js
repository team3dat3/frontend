
let baseUrl = 'http://localhost:3000/v1';

export function setAPIKey(apiKey) {
    localStorage.setItem('apiKey', apiKey);
}

function hasAPIKey() {
    return localStorage.getItem('apiKey') !== null;
}

function getAPIKey() {
    return localStorage.getItem('apiKey');
}

export async function request(endpoint, options) {
    let fetchOptions = createFetchOptions(
        options.method, 
        options.body);

    const response = await fetch(`${baseUrl}${endpoint}`, fetchOptions);
    if (response.ok) {
        const json = await response.json();
        options.callback(json);
    } else {
        options.error(response);
    }
}

function createFetchOptions(method, body) {
    let fetchOptions = {
        method: method ? method : 'GET',
        headers: headers(),
    }

    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }

    return fetchOptions;
}

function headers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    if (hasAPIKey()) {
        headers.append('Authorization', getAPIKey());
    }

    return headers;
}
