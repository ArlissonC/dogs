import Button from "components/Button";
import Error from "components/Helper/Error";
import Input from "components/Input";
import useFetch from "hooks/useFetch";
import useForm from "hooks/useForm";
import { PASSWORD_LOST } from "services/auth";

const LostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (login.validate()) {
      await request(
        PASSWORD_LOST({
          login: login.value,
          url: window.location.href.replace("perdeu-senha", "resetar"),
        }),
      );
    }
  };

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data.data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LostPassword;
