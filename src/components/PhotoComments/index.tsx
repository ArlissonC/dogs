import { IComment } from "interfaces/Photo/IComment";

interface PhotoCommentsProps {
  id: number;
  comments: IComment[];
}

const PhotoComments = ({ id, comments }: PhotoCommentsProps) => {
  return <div>PhotoComments</div>;
};

export default PhotoComments;
