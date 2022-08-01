import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import styles from "./footer.module.css";

export default function NavBar() {
  return (
    <footer className={styles.footer}>
      <section className={styles.subnav}>
        <nav>
          <h3>Fakesite</h3>
          <Link href="/">
            <a>About us</a>
          </Link>
          <Link href="/">
            <a>Press</a>
          </Link>
          <Link href="/">
            <a>Policies</a>
          </Link>
          <Link href="/">
            <a>Help</a>
          </Link>
        </nav>
        <nav>
          <h3>Account</h3>
          <Link href="/">
            <a>Edit Profile</a>
          </Link>
          <Link href="/">
            <a>Friends</a>
          </Link>
          <Link href="/">
            <a>Social</a>
          </Link>
          <Link href="/">
            <a>Delete Profile</a>
          </Link>
        </nav>
      </section>
      <section className={styles.boilerplate}>
        <div className="logo">
          <Image src={logo} />
        </div>
        <nav>
          <Link href="/">
            <a>Terms</a>
          </Link>
          <Link href="/">
            <a>Privacy</a>
          </Link>
          <Link href="/">
            <a>Site Map</a>
          </Link>
        </nav>
      </section>
    </footer>
  );
}
