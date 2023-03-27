import AuthenticationController from "../controller/AuthenticationController.js";
import AuthenticationRequest from "../dto/authentication/AuthenticationRequest.js";

// Create a authentication controller
const authenticationController = new AuthenticationController();

/**
 * Authentication page class.
 *  
 * @returns {AuthenticationPage}
 */
export default function AuthenticationPage() {
    
    // Create a new authentication
    const authenticationRequest = new AuthenticationRequest("username", "password");
    // Send the authentication request
    authenticationController.authenticate(authenticationRequest, (authenticationResponse) => {
        // set the JWT token from the response.
        authenticationController.setToken(authenticationResponse.token);
    }, (error) => {
        console.log(error);
    });
}