import Question from "./Question";
import { nanoid } from "nanoid";

export default function Questionnaire(props) {
  // Take the array of objects [{}...{}]
  // each one has correct, incorrect and question
  // create an array [C, I, I, I]
  // randomise array ... eg: [I, C, I, I]
  // pass in random array
  // display the Q, then answers in element order
  // use conditional rendering within Questions.jsx
  // let array = [1, 2, 3, 4];
  // const answers = shuffle(props.data.answersArray);

  // Render a Question element for each result from API fetch
  console.log("run Quest");
  console.log(props);
  const questions = props.data.map((element) => {
    return (
      <Question
        key={nanoid()}
        question={element.question}
        answersArray={element.answersArray}
      />
    );
  });

  return (
    <div className="questionnaire">
      <h1> Questionnaire</h1>
      {questions}
      <button onClick={props.toggleCheck}>Check answer</button>
    </div>
  );
}
