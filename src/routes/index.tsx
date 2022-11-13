import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "store/configureStore";
import { validateToken } from "store/token";
import { userLogout } from "store/user";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

const Router = () => {
  const { data } = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const { type } = await dispatch(validateToken(token));
        if (type === "token/validateToken/rejected") {
          navigate("/auth");
          dispatch(userLogout());
        }
      }
    })();
  }, [dispatch, navigate]);

  if (data) {
    return <UserRoutes />;
  }

  return <AuthRoutes />;
};

export default Router;
