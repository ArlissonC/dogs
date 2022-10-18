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
  user: any;
  page: number;
  setInfinite: (param: boolean) => void;
}

const FeedPhotos = ({
  user,
  setModalPhoto,
  page,
  setInfinite,
}: FeedPhotosProps) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    (async () => {
      const total = 6;
      const { response } = await request(PHOTOS_GET({ page, total, user }));
      if (response && response.status === 200 && response.data.length < total)
        setInfinite(false);
    })();
  }, [request, user, page, setInfinite]);

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
