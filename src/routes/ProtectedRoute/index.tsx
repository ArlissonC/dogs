import { useAuth } from "context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { login } = useAuth();

  return login ? element : <Navigate to="/auth" />;
};

export default ProtectedRoute;
