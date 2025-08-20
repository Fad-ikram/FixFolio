import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

const AuthMiddleware = () => {
  const { user } = useAuth();
    
    
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};

export default AuthMiddleware;