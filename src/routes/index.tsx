import { useAuth } from "context/AuthContext";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

const Router = () => {
  const { userLogged } = useAuth();

  if (userLogged()) {
    return <UserRoutes />;
  }

  return <AuthRoutes />;
};

export default Router;
