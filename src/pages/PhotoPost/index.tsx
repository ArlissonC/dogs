import Button from "components/Button";
import Error from "components/Helper/Error";
import Input from "components/Input";
import useFetch from "hooks/useFetch";
import useForm from "hooks/useForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "services/photo";
import styles from "./PhotoPost.module.css";

interface ImgProps {
  preview: any;
  raw: File;
}

const PhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm();
  const [img, setImg] = useState({} as ImgProps);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) return navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    await request(PHOTO_POST(formData));
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg({
      preview: URL.createObjectURL(e.target.files![0]),
      raw: e.target.files![0],
    });
  };

  return (
    <section className={`${styles.photoPost} anime-left`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default PhotoPost;
