import { Navigate, Outlet, Route } from "react-router-dom";
import { useAppSelector } from "../../shared/lib/store/redux";

const PrivateRoute = () => {
    const isAuth = localStorage.getItem('token')

  if (isAuth?.length) {
     return <Outlet/>
  } else {
    return <Navigate to="/login" />;
  }
};
  
export default PrivateRoute;