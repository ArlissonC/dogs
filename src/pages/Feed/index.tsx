import Error from "components/Helper/Error";
import Head from "components/Helper/Head";
import Loading from "components/Helper/Loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/configureStore";
import { fetchFeedPhotos, resetFeedState } from "store/feed";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }: any) => {
  const location = window.location.pathname;
  const dispatch = useAppDispatch();
  const { infinite, loading, list, error } = useSelector(
    (state: RootState) => state.feed,
  );

  useEffect(() => {
    dispatch(resetFeedState());
    dispatch(fetchFeedPhotos({ user }));
  }, [dispatch, user]);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite && !loading) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          dispatch(fetchFeedPhotos({ user }));
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, dispatch, user, loading]);

  return (
    <div>
      <Head title={location === "/" ? "Feed" : "Minha Conta"} />
      <FeedModal />
      {list.length > 0 && <FeedPhotos />}
      {loading && <Loading />}
      {error && <Error error={error} />}

      {!infinite && !user && (
        <p
          style={{
            textAlign: "center",
            padding: "2rem 0 4rem 0",
            color: "#888",
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
};

export default Feed;
