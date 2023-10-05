import cssModules from "react-css-modules";
import styles from "./buttonFromReactCssModules.module.css";

// 👇 React CSS Modules approach style/styleName
// eslint-disable-next-line react/no-unknown-property
export const Button = () => <button styleName="button">Click me!</button>;
export const ButtonFromReactCssModules = cssModules(Button, styles);
