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

  const results = props.data.results;
  // Render a Question element for each result from API fetch
  const questions = results.map((result) => {
    return (
      <Question
        key={nanoid()}
        question={result.question}
        c_answer={result.correct_answer}
        i_answers={result.incorrect_answers}
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

// import Question from "./Question";

// export default function Questionnaire(props) {
//   // Take the array of objects [{}...{}]
//   // each one has correct, incorrect and question
//   // create an array [C, I, I, I]
//   // randomise array ... eg: [I, C, I, I]
//   // pass in random array
//   // display the Q, then answers in element order
//   // use conditional rendering within Questions.jsx
//   let array = [1, 2, 3, 4];

//   // Use Fisher-Yates Shuffle
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
//   shuffle(array);

//   const results = props.data.results;
//   console.log(results);
//   const questions = results.map((result) => {
//     // Create an array to store all answers
//     let answersArray = [
//       {
//         answer: result.correct_answer,
//         isCorrect: true,
//       },
//     ];
//     for (let i = 0; i < 3; i++) {
//       answersArray.push({
//         answer: result.incorrect_answers[i],
//         isCorrect: false,
//       });
//     }
//     // Randomise the order of the array
//     shuffle(answersArray);
//     console.log(answersArray);

//     return <Question question={result.question} answers={answersArray} />;
//   });

//   console.log(questions);

//   return (
//     <div className="questionnaire">
//       <h1> Questionnaire</h1>
//       {questions}
//     </div>
//   );
// }
