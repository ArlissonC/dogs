import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AccountHeaderNav from "../AccountHeaderNav";
import styles from "./AccountHeader.module.css";

const AccountHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/conta/estatisticas":
        return setTitle("Estatísticas");
      case "/conta/postar":
        return setTitle("Poste sua foto");
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <AccountHeaderNav />
    </header>
  );
};

export default AccountHeader;
