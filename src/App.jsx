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
      .then((data) =>
        setData(
          data.results.map((result) => {
            // console.log(result);
            // return result;
            let answersArray = [
              {
                answer: result.correct_answer,
                isCorrect: true,
                isSelected: false,
              },
            ];
            for (let i = 0; i < 3; i++) {
              answersArray.push({
                answer: result.incorrect_answers[i],
                isCorrect: false,
                isSelected: false,
              });
            }
            // console.log(answersArray);
            // console.log(result.question);
            return {
              answersArray: answersArray,
              question: result.question,
            };
          })
        )
      )
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  // function transformData(results) {
  //   console.log("transforming data");
  //   // console.log(results);
  //   const resultsArray = results.map((result) => {
  //     console.log(result);
  //     // return result;
  //     let answersArray = [
  //       {
  //         answer: result.correct_answer,
  //         isCorrect: true,
  //         isSelected: false,
  //       },
  //     ];
  //     for (let i = 0; i < 3; i++) {
  //       answersArray.push({
  //         answer: result.incorrect_answers[i],
  //         isCorrect: false,
  //         isSelected: false,
  //       });
  //     }
  //     console.log(answersArray);
  //     console.log(result.question);
  //     return {
  //       answersArray: answersArray,
  //       question: result.question,
  //     };
  //   });
  // }

  // useEffect(() => {
  //   if (data.length) {
  //     console.log(data);
  //   }
  // }, [data]);
  // function shuffle(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }
  // // Create an array to store all answers
  // let answersArray = [
  //   {
  //     answer: props.c_answer,
  //     isCorrect: true,
  //   },
  // ];
  // for (let i = 0; i < 3; i++) {
  //   answersArray.push({
  //     answer: props.i_answers[i],
  //     isCorrect: false,
  //   });
  // }
  // // Randomise the order of the array
  // shuffle(answersArray);
  // console.log(answersArray);
  // function handleClick(answer) {
  //   console.log(answer);
  // }

  // function htmlDecode(input) {
  //   let doc = new DOMParser().parseFromString(input, "text/html");
  //   return doc.documentElement.textContent;
  // }

  function toggleDisplay() {
    setDisplay((display) => !display);
  }

  function toggleCheckAnswers() {
    console.log("toggle check");
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
