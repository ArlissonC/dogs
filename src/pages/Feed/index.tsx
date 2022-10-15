import { IPhoto } from "interfaces/Photo/IPhoto";
import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<IPhoto | null>(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
