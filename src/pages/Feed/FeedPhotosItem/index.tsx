import Image from "components/Helper/Image";
import { IPhoto } from "interfaces/Photo/IPhoto";
import { useAppDispatch } from "store/configureStore";
import { fetchPhoto } from "store/photo";
import { openModal } from "store/ui";
import styles from "./FeedPhotosItem.module.css";

interface FeedPhotoItemProps {
  photo: IPhoto;
}

const FeedPhotosItem = ({ photo }: FeedPhotoItemProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  };
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
