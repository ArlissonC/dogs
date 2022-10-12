import Button from "components/Button";
import Input from "components/Input";
import { useAuth } from "context/AuthContext";
import useForm from "hooks/useForm";
import { Link, Outlet } from "react-router-dom";

const Login = () => {
  const { userLogin } = useAuth();
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Outlet />
      <Link to="criar">Cadastro</Link>
    </section>
  );
};

export default Login;
