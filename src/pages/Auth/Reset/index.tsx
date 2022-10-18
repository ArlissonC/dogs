import Button from "components/Button";
import Error from "components/Helper/Error";
import Input from "components/Input";
import useFetch from "hooks/useFetch";
import useForm from "hooks/useForm";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "services/auth";

const Reset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const { error, loading, request } = useFetch();
  const password = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.validate()) {
      const { response } = await request(
        PASSWORD_RESET({
          login,
          key,
          password: password.value,
        }),
      );

      if (response.status === 200) navigate("/auth");
    }
  };

  return (
    <div>
      <h1 className="title">Resetar senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />

        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default Reset;
