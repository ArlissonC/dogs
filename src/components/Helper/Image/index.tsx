import { useState } from "react";
import styles from "./Image.module.css";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const Image = ({ alt, ...props }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setSkeleton(false);
    currentTarget.style.opacity = "1";
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
