import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import Thumbnail from "../../components/thumbnail";
import Footer from "../../components/footer";
import DOMPurify from "isomorphic-dompurify";
import { getAllVideoIds, getVideoData } from "../../utils/videos";
import styles from "../../styles/[id].module.css";

export default function VideoPage({ videoData }) {
  return (
    <Layout>
      <Head>
        <title>{videoData[0].title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <NavBar />

        <Link href="/">
          <a className={styles.homeLink}>&#8592; &nbsp; Back to home</a>
        </Link>

        <section className={styles.videoContainer}>
          <a href={videoData[0].url}>
            <h2 className={styles.videoTitle}>{videoData[0].title}</h2>
          </a>
          <Thumbnail
            thumbnail_large={videoData[0].thumbnail_large}
            url={videoData[0].url}
            priority="true"
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(videoData[0].description),
            }}
          ></p>
        </section>
      </article>
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllVideoIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const videoData = getVideoData(params.id);

  return {
    props: {
      videoData,
    },
  };
}
