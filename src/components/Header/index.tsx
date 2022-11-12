import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "assets/dogs.svg";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const Header = () => {
  const { data } = useSelector((state: RootState) => state.user);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data?.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/auth">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
