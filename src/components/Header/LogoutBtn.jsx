import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.services.js";
import { logout } from "../../store/authSlice.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
        toast("See you soon")
    }

  return (
    <>
    <button className="font-semibold font-mono text-lg inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHandler}
    >
        Logout
    </button>
    <ToastContainer />
    </>
  )
}

export default LogoutBtn