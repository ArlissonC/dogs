import useFetch from "hooks/useFetch";
import { PHOTO_DELETE } from "services/photo";
import styles from "./PhotoDelete.module.css";

interface PhotoDeleteProps {
  id: number;
}

const PhotoDelete = ({ id }: PhotoDeleteProps) => {
  const { loading, request } = useFetch();
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      const { response } = await request(PHOTO_DELETE(id));

      if (response.status === 200) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
