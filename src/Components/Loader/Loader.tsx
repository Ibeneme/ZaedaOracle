// Loader.js

import styles from "./Loader.module.css"; // Add your styles if needed

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
