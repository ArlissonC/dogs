import { IPhoto } from "interfaces/Photo/IPhoto";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import FeedPhotosItem from "../FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { list } = useSelector((state: RootState) => state.feed);

  return (
    <ul className={`${styles.feed} anime-left`}>
      {list?.map((photo: IPhoto) => (
        <FeedPhotosItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default FeedPhotos;
