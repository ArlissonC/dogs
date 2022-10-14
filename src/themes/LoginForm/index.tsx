import { useAuth } from "context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const { login } = useAuth();

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  );
};

export default LoginForm;
