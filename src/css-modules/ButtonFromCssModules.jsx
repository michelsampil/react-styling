import styles from "./buttonFromCssModules.module.css";

// 👇 Classic CSS module approach
export const ButtonFromCssModules = () => (
  <button className={styles.button}>Click me!</button>
);
