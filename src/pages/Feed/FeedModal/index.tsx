import Error from "components/Helper/Error";
import Loading from "components/Helper/Loading";
import PhotoContent from "components/Photo/PhotoContent";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/configureStore";
import { closeModal } from "store/ui";
import styles from "./FeedModal.module.css";

const FeedModal = () => {
  const { modal } = useSelector((state: RootState) => state.ui);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.photo,
  );
  const dispatch = useAppDispatch();

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
