import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/Images/Logo.png";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image src={Logo} height={50} width={80} />
      <div className={styles.linkWrapper}>
        <Link
          href="/"
          className={
            router.pathname == "/" ? `${styles.active}` : `${styles.inactive}`
          }
        >
          Home
        </Link>
        <Link
          href="/services"
          className={
            router.pathname == "/services"
              ? `${styles.active}`
              : `${styles.inactive}`
          }
        >
          Services
        </Link>
        <Link
          href="/blog"
          className={
            router.pathname == "/blog"
              ? `${styles.active}`
              : `${styles.inactive}`
          }
        >
          Blog
        </Link>
        <Link
          href="about-us"
          className={
            router.pathname == "/about-us"
              ? `${styles.active}`
              : `${styles.inactive}`
          }
        >
          About Us
        </Link>
        <Link
          href="contact-us"
          className={
            router.pathname == "/contact-us"
              ? `${styles.active}`
              : `${styles.inactive}`
          }
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
