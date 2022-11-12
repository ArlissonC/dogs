import { useAuth } from "context/AuthContext";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

const Router = () => {
  const { data } = useSelector((state: RootState) => state.user);
  if (data) {
    return <UserRoutes />;
  }

  return <AuthRoutes />;
};

export default Router;
