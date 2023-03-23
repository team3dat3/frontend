import { request, setAPIKey } from '../util/API';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

export default class BaseController {
    get = (url, callback, error) => {
        request(url, { method: GET, callback, error });
    }

    post = (url, body, callback, error) => {
        request(url, { method: POST, body, callback, error });
    }

    put = (url, body, callback, error) => {
        request(url, { method: PUT, body, callback, error });
    }

    patch = (url, body, callback, error) => {
        request(url, { method: PATCH, body, callback, error });
    }

    delete = (url, callback, error) => {
        request(url, { method: DELETE, callback, error });
    }

    setAPIKey = (apiKey) => {
        setAPIKey(apiKey);
    }
}