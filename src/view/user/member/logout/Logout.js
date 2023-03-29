import { removeAPIKey } from "../../../../util/API.js";
import { refreshHeader } from "../../../layout/Header.js";
import { showToast } from '../../../../components/Toast.js';

/**
 * User member logout.
 *  
 * @returns {undefined}
 */
export default function UserMemberLogout() {
    removeAPIKey();
    refreshHeader(document);
    window.router.navigate('/login');
    showToast('success', 'Logout successful.', 5000);
}