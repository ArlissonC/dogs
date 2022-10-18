import Error from "components/Helper/Error";
import Loading from "components/Helper/Loading";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "services/photo";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    (async () => {
      await request(PHOTO_GET(Number(id)));
    })();
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data.data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
