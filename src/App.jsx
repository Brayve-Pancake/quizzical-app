import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Questionnaire from "./components/Questionnaire";
import Welcome from "./components/Welcome";

function App() {
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState([]);

  const questionAPI =
    "https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=multiple";

  useEffect(() => {
    fetch(questionAPI)
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.results.map((result) => {
            let answersArray = [
              {
                answer: htmlDecode(result.correct_answer),
                isCorrect: true,
                isSelected: false,
              },
            ];
            for (let i = 0; i < 3; i++) {
              answersArray.push({
                answer: htmlDecode(result.incorrect_answers[i]),
                isCorrect: false,
                isSelected: false,
              });
            }
            return {
              answersArray: shuffle(answersArray),
              question: htmlDecode(result.question),
              id: nanoid(),
            };
          })
        )
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  // For front page conditional rendering
  function toggleDisplay() {
    setDisplay((display) => !display);
  }

  return (
    <div className="App">
      {!display && <Welcome toggleDisplay={toggleDisplay} />}
      {display && <Questionnaire data={data} />}
    </div>
  );
}

export default App;
