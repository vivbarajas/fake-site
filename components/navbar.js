import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import profilePic from "../public/assets/profile.jpeg";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/home">
        <div className="logo">
          <Image
            src={logo}
            alt="World's Greatest Site Logo"
            layout="fixed"
            priority="true"
          />
        </div>
      </Link>
      <div className={styles.align}>
        <Link href="/Account">
          <a>Account</a>
        </Link>
        <Link href="/Help">
          <a>Help</a>
        </Link>
        <div className={styles.avatarBorder}>
          <Image
            src={profilePic}
            width={50}
            height={50}
            layout="fixed"
            className={styles.avatar}
            priority="true"
          />
        </div>
      </div>
    </nav>
  );
}
