import { Navigate, Outlet ,useLocation} from "react-router-dom";
import { useAuth } from "../hooks/authContext";

const GuestMiddleware = () => {
  const { user } = useAuth();
 const location = useLocation();

  if (user && (location.pathname === "/sign-in" || location.pathname === "/sign-up")) {
    return <Navigate to="/portfolio" replace />;
  }

  return <Outlet />;
}
export default GuestMiddleware;


