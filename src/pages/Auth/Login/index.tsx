import Button from "components/Button";
import Error from "components/Helper/Error";
import Input from "components/Input";
import { useAuth } from "context/AuthContext";
import useForm from "hooks/useForm";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import stylesBtn from "components/Button/Button.module.css";
import Head from "components/Helper/Head";

const Login = () => {
  const { userLogin, error, loading } = useAuth();
  const username = useForm();
  const password = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const ok = await userLogin(username.value, password.value);

      if (ok!) navigate("/conta");
    }
  };
  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Outlet />
      <Link to="perdeu-senha" className={styles.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default Login;
