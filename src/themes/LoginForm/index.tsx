import { useAuth } from "context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuth();

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LoginForm;
