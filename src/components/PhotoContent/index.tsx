import PhotoComments from "components/PhotoComments";
import { IComment } from "interfaces/Photo/IComment";
import { IPhoto } from "interfaces/Photo/IPhoto";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";

interface PhotoContentProps {
  data: {
    photo: IPhoto;
    comments: IComment[];
  };
}

const PhotoContent = ({ data }: PhotoContentProps) => {
  const { photo, comments } = data;

  console.log(comments);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
