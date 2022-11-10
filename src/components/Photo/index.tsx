import Error from "components/Helper/Error";
import Head from "components/Helper/Head";
import Loading from "components/Helper/Loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store/configureStore";
import { fetchPhoto } from "store/photo";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.photo,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(Number(id)));
  }, [dispatch, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} />
      </section>
    );
  else return null;
};

export default Photo;
