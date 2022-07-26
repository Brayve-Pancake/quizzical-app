import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Welcome from "./components/Welcome";

function App() {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay((display) => !display);
    console.log("toggleDisplay");
  }

  return (
    <div className="App">
      <p>Hello</p>
      <Welcome toggleDisplay={toggleDisplay} />
    </div>
  );
}

export default App;
