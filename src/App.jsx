import { useState, useEffect } from "react";
import Questionnaire from "./components/Questionnaire";
import Welcome from "./components/Welcome";

function App() {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);
  const [checkAnswers, setCheckAnswers] = useState(false);

  const questionAPI =
    "https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=multiple";

  useEffect(() => {
    fetch(questionAPI)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function toggleDisplay() {
    setDisplay((display) => !display);
  }

  function toggleCheckAnswers() {
    setCheckAnswers((checkAnswers) => !checkAnswers);
  }

  return (
    <div className="App">
      {!display && <Welcome toggleDisplay={toggleDisplay} />}
      {display && (
        <Questionnaire data={data} toggleCheck={toggleCheckAnswers} />
      )}
    </div>
  );
}

export default App;
