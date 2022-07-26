import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Questionnaire from "./components/Questionnaire";
import Welcome from "./components/Welcome";

function App() {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay((display) => !display);
    console.log("toggleDisplay");
  }

  return (
    <div className="App">
      {!display && <Welcome toggleDisplay={toggleDisplay} />}
      {display && <Questionnaire />}
    </div>
  );
}

export default App;
