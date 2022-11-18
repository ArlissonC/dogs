import Button from "components/Button";
import Error from "components/Helper/Error";
import Head from "components/Helper/Head";
import Input from "components/Input";
import useForm from "hooks/useForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "store/configureStore";
import { fetchPhotoPost } from "store/photoPost";
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
  const dispatch = useAppDispatch();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.photoPost,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (data) return navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nome.validate() && peso.validate() && idade.validate() && img.preview) {
      const formData = new FormData();
      formData.append("img", img.raw);
      formData.append("nome", nome.value);
      formData.append("peso", peso.value);
      formData.append("idade", idade.value);

      dispatch(fetchPhotoPost(formData));
    }
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg({
      preview: URL.createObjectURL(e.target.files![0]),
      raw: e.target.files![0],
    });
  };

  return (
    <section className={`${styles.photoPost} anime-left`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
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
