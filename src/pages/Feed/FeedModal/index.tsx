import Error from "components/Helper/Error";
import Loading from "components/Helper/Loading";
import PhotoContent from "components/Photo/PhotoContent";
import { IPhoto } from "interfaces/Photo/IPhoto";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/configureStore";
import { fetchPhoto } from "store/photo";
import styles from "./FeedModal.module.css";

interface FeedModalProps {
  photo: IPhoto;
  setModalPhoto: (param: IPhoto | null) => void;
}

const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.photo,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(Number(photo.id)));
  }, [dispatch, photo]);

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) setModalPhoto(null);
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
