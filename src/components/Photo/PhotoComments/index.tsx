import { IComment } from "interfaces/Photo/IComment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import PhotoCommentsForm from "../PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

interface PhotoCommentsProps {
  id: number;
  comments: IComment[];
  single?: boolean;
}

const PhotoComments = ({ id, comments, single }: PhotoCommentsProps) => {
  const [commentsState, setCommentsState] = useState(() => comments);
  const { data } = useSelector((state: RootState) => state.user);

  return (
    <>
      <ul className={`${styles.comments} ${single ? styles.single : ""}`}>
        {commentsState.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {data && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setCommentsState={setCommentsState}
        />
      )}
    </>
  );
};

export default PhotoComments;
