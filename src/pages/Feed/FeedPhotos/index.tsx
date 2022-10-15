import Error from "components/Helper/Error";
import Loading from "components/Helper/Loading";
import useFetch from "hooks/useFetch";
import { IPhoto } from "interfaces/Photo/IPhoto";
import { useEffect } from "react";
import { PHOTOS_GET } from "services/photo";
import FeedPhotosItem from "../FeedPhotosItem";
import styles from "./FeedPhotos.module.css";

interface FeedPhotosProps {
  setModalPhoto: (param: IPhoto | null) => void;
}

const FeedPhotos = ({ setModalPhoto }: FeedPhotosProps) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    (async () => {
      await request(PHOTOS_GET({ page: 1, total: 6, user: 0 }));
    })();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} anime-left`}>
        {data.data?.map((photo: IPhoto) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedPhotos;
