import Image from "components/Helper/Image";
import PhotoComments from "components/Photo/PhotoComments";
import { useAuth } from "context/AuthContext";
import { IComment } from "interfaces/Photo/IComment";
import { IPhoto } from "interfaces/Photo/IPhoto";
import { Link } from "react-router-dom";
import PhotoDelete from "../PhotoDelete";
import styles from "./PhotoContent.module.css";

interface PhotoContentProps {
  data: {
    photo: IPhoto;
    comments: IComment[];
  };
  single?: boolean;
}

const PhotoContent = ({ data, single }: PhotoContentProps) => {
  const user = useAuth();
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <span className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </span>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
