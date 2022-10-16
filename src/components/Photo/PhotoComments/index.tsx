import { useAuth } from "context/AuthContext";
import { IComment } from "interfaces/Photo/IComment";
import { useState } from "react";
import PhotoCommentsForm from "../PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

interface PhotoCommentsProps {
  id: number;
  comments: IComment[];
}

const PhotoComments = ({ id, comments }: PhotoCommentsProps) => {
  const [commentsState, setCommentsState] = useState(() => comments);
  const { login } = useAuth();

  return (
    <>
      <ul className={styles.comments}>
        {commentsState.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setCommentsState={setCommentsState} />
      )}
    </>
  );
};

export default PhotoComments;
