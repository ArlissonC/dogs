import Button from "components/Button";
import Error from "components/Helper/Error";
import Input from "components/Input";
import { useAuth } from "context/AuthContext";
import useRequest from "hooks/useFetch";
import useForm from "hooks/useForm";
import { USER_POST } from "services/auth";

const CreateUser = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useAuth();
  const { loading, error, request } = useRequest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.validate() && password.validate() && email.validate()) {
      const { response } = await request(
        USER_POST({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      );
      if (response && response.status === 200) {
        return userLogin(username.value, password.value);
      }
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default CreateUser;
