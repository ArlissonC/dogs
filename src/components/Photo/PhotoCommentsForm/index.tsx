import { useState } from "react";
import { ReactComponent as Enviar } from "assets/enviar.svg";
import useFetch from "hooks/useFetch";
import { COMMENT_POST } from "services/photo";
import styles from "./PhotoCommentsForm.module.css";
import { IComment } from "interfaces/Photo/IComment";
import Error from "components/Helper/Error";

interface PhotoCommentsFormProps {
  id: number;
  setCommentsState: (comment: any) => void;
}

const PhotoCommentsForm = ({
  id,
  setCommentsState,
}: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { response } = await request(COMMENT_POST(id, { comment }));

    if (response.status === 200) {
      setComment("");
      setCommentsState((comments: IComment[]) => [...comments, response.data]);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
