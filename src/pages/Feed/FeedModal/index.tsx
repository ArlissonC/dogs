import Error from "components/Helper/Error";
import Loading from "components/Helper/Loading";
import PhotoContent from "components/Photo/PhotoContent";
import useFetch from "hooks/useFetch";
import { IPhoto } from "interfaces/Photo/IPhoto";
import { useEffect } from "react";
import { PHOTO_GET } from "services/photo";
import styles from "./FeedModal.module.css";

interface FeedModalProps {
  photo: IPhoto;
  setModalPhoto: (param: IPhoto | null) => void;
}

const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    request(PHOTO_GET(photo.id));
  }, [request, photo]);

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) setModalPhoto(null);
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data.data} />}
    </div>
  );
};

export default FeedModal;
