// First approaches fixes to inline limitations
import Radium from "radium";

const styles = {
  backgroundColor: "#ff0000",
  width: 320,
  padding: 20,
  borderRadius: 5,
  border: "none",
  outline: "none",
  ":hover": {
    color: "#fff",
  },
  ":active": {
    position: "relative",
    top: 2,
  },
  "@media (max-width: 480px)": {
    width: 160,
  },
};

const Button = () => <button style={styles}>Click me!</button>;

export const ButtonFromRadium = Radium(Button);
