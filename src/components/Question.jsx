export default function Question(props) {
  // Use Fisher-Yates Shuffle
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
  // // console.log(answersArray);
  // function handleClick(answer) {
  //   console.log(answer);
  // }

  // function htmlDecode(input) {
  //   let doc = new DOMParser().parseFromString(input, "text/html");
  //   return doc.documentElement.textContent;
  // }

  // Write down a process flow on paper for what should happen.
  // if the correct radio button is clicked when submit is clicked,
  // When submit is clicked, check each radio for the

  // Store state in the App. everytime a radio button is clicked, (onChange) update the number of correct answers.
  // if the corresponding element is correct, add 1 to count
  // onChange, subtract 1.
  // use some handleChange function looks at `isCorrect`

  // fetch of data should be done at top level, store and split the information on the App.

  // FIGURE OUT HOW I WANT THE APPLICATION TO WORK.

  // upon being clicked, loop through all answers and change the
  // isSelected to false for all and to true for clicked.
  // function at app level, with state - maybe just one level up.

  return (
    <div className="question">
      <h2>{props.question}</h2>
      <button className="answer1">{props.answersArray[0].answer}</button>
      <button className="answer2">{props.answersArray[1].answer}</button>
      <button className="answer3">{props.answersArray[2].answer}</button>
      <button className="answer4">{props.answersArray[3].answer}</button>
    </div>
  );
}
