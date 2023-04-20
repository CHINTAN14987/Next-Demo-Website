import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/global.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.app}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
