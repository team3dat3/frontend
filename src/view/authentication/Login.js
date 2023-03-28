import { loadAndRender } from '../../util/Render.js';
import AuthenticationController from '../../controller/AuthenticationController.js';
import AuthenticationRequest from '../../dto/authentication/AuthenticationRequest.js';

// Create a new authentication controller
const authenticationController = new AuthenticationController();

/**
 * Login.
 *  
 * @returns {undefined}
 */
export default function Login() {
    // Load and render the template
    loadAndRender('src/view/authentication/template.html', (html) => {
        // Find login form
        const loginForm = html.querySelector('#login-form');

        // Add event listener to login form
        loginForm.addEventListener('submit', (event) => {
            // Prevent default form submit
            event.preventDefault();

            // Get form data
            const formData = new FormData(loginForm);

            // Create a new authentication request
            const authenticationRequest = new AuthenticationRequest(
                formData.get('username'),
                formData.get('password')
            );

            // Create a new authentication controller
            authenticationController.authenticate(authenticationRequest, (authenticationResponse) => {
                // Set the API key
                authenticationController.setAPIKey(authenticationResponse.token);

                // Redirect to home page
                window.router.navigate('/');
            }, (error) => {
                console.log(error);
            }); 
        });
    });
}