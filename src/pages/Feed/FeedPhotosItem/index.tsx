import Image from "components/Helper/Image";
import { IPhoto } from "interfaces/Photo/IPhoto";
import styles from "./FeedPhotosItem.module.css";

interface FeedPhotoItemProps {
  photo: IPhoto;
  setModalPhoto: (param: IPhoto | null) => void;
}

const FeedPhotosItem = ({ photo, setModalPhoto }: FeedPhotoItemProps) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
