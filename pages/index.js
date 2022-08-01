import Head from "next/head";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import VideoCard from "../components/videocard";
import Footer from "../components/footer";
import { getAllVideoData } from "../utils/videos";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const allVideoData = await getAllVideoData();

  return {
    props: {
      allVideoData,
    },
  };
}

export default function Home({ allVideoData }) {
  return (
    <Layout>
      <Head>
        <title>The World's Greatest Fake Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.hero}>
        <NavBar />
        <section className={styles.heroContent}>
          <h1>The world's greatest fake site</h1>
          <p>
            Create the world's greatest fake site and enjoy the breeze of fresh
            air when you complete it
          </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button className={styles.btn}>Do something awesome</button>
          </a>
        </section>
      </article>

      <article className={styles.videosContainer}>
        {allVideoData.map(({ id, title, teaser, url, thumbnail_large }) => (
          <VideoCard
            url={url}
            id={id}
            title={title}
            teaser={teaser}
            thumbnail_large={thumbnail_large}
            key={id}
          />
        ))}
      </article>

      <aside className={styles.aside}>
        <h2>Ready to have your cake and eat it too?</h2>
        <p>
          Start by designing the experience you have in mind. We'll guide you
          through each step. If your experience meets the quality standards,
          you'll hear more about what's next.
        </p>
      </aside>
      <Footer />
    </Layout>
  );
}
