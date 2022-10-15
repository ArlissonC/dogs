import { useAuth } from "context/AuthContext";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

const Router = () => {
  const { login } = useAuth();

  if (login) {
    return <UserRoutes />;
  }

  return <AuthRoutes />;
};

export default Router;
