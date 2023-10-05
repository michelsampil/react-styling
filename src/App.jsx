import "./App.css";
import { ButtonFromReactCssModules } from "./react-css-modules/ButtonFromReactCssModules";
import { ButtonFromCssModules } from "./css-modules/ButtonFromCssModules";
import { ButtonStyledComponent } from "./styled-components/ButtonStyledComponent";

function App() {
  return (
    <>
      <div className="card">
        {/* <ButtonFromRadium /> */}
        <h2> CSS Modules</h2>
        <ButtonFromCssModules />
        <h2> CSS React Modules</h2>
        <ButtonFromReactCssModules />
        <h2> Styled Components 💅</h2>
        <ButtonStyledComponent />
      </div>
    </>
  );
}

export default App;
