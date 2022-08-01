import Image from "next/image";
import playButton from "../public/assets/playbtn.png";
import styles from "./thumbnail.module.css";

export default function Thumbnail({ url, thumbnail_large, priority }) {
  return (
    <a href={url}>
      <div className={styles.thumbnailContainer}>
        <div className={styles.gradient}>
          <div className={styles.playBtn}>
            <Image src={playButton} width={116} height={117} />
          </div>
        </div>
        <Image
          src={thumbnail_large}
          width={640}
          height={480}
          className={styles.thumbnail}
          layout="responsive"
          priority={priority}
        />
      </div>
    </a>
  );
}
