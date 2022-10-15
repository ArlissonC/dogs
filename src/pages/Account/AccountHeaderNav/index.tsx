import { useAuth } from "context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as MinhasFotos } from "assets/feed.svg";
import { ReactComponent as Estatisticas } from "assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "assets/adicionar.svg";
import { ReactComponent as Sair } from "assets/sair.svg";
import styles from "./AccountHeaderNav.module.css";
import { useEffect, useState } from "react";
import useMedia from "hooks/useMedia";

const AccountHeaderNav = () => {
  const { userLogout } = useAuth();
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="postar">
          <AdicionarFoto />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default AccountHeaderNav;
