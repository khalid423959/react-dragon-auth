import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if (loding) {
        return <div className="">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;