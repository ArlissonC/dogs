import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "assets/dogs.svg";
import styles from "./Header.module.css";
import { useAuth } from "context/AuthContext";

const Header = () => {
  const { data, userLogout } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data?.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="auth/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;