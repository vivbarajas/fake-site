import Link from "next/link";
import Thumbnail from "./thumbnail";
import DOMPurify from "isomorphic-dompurify";
import styles from "./videocard.module.css";
import stockImg from "../public/assets/stockimage.png";

export default function VideoCard({ id, title, teaser, thumbnail_large }) {
  return (
    <section className={styles.videoCard}>
      <div className={styles.videoDetails}>
        <Link href={`/videos/${id}`}>
          <a>
            <h2 className={styles.videoLink}>{title}</h2> 
         
          </a>
          
        </Link>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(teaser) }}></p>
      </div>
      <Thumbnail url={`/videos/${id}`} thumbnail_large={thumbnail_large} />
    </section>
  );
}
