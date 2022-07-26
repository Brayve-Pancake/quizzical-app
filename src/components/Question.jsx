export default function Question(props) {
  // Use Fisher-Yates Shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // Create an array to store all answers
  let answersArray = [
    {
      answer: props.c_answer,
      isCorrect: true,
    },
  ];
  for (let i = 0; i < 3; i++) {
    answersArray.push({
      answer: props.i_answers[i],
      isCorrect: false,
    });
  }
  // Randomise the order of the array
  shuffle(answersArray);
  console.log(answersArray);
  function handleClick(answer) {
    console.log(answer);
  }

  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  // Write down a process flow on paper for what should happen.
  // if the correct radio button is clicked when submit is clicked,
  // When submit is clicked, check each radio for the

  // Store state in the App. everytime a radio button is clicked, (onChange) update the number of correct answers.
  // if the corresponding element is correct, add 1 to count
  // onChange, subtract 1.
  // use some handleChange function looks at `isCorrect`

  // fetch of data should be done at top level, store and split the information on the App.

  // FIGURE OUT HOW I WANT THE APPLICATION TO WORK.

  return (
    <div className="question">
      <h2>{htmlDecode(props.question)}</h2>
      <button
        onClick={() => {
          handleClick(answersArray[0].isCorrect);
        }}
        className="answer1"
      >
        {answersArray[0].answer}
      </button>
      <button
        onClick={() => {
          handleClick(answersArray[1].isCorrect);
        }}
        className="answer2"
      >
        {answersArray[1].answer}
      </button>
      <button
        onClick={() => {
          handleClick(answersArray[2].isCorrect);
        }}
        className="answer3"
      >
        {answersArray[2].answer}
      </button>
      <button
        onClick={() => {
          handleClick(answersArray[3].isCorrect);
        }}
        className="answer4"
      >
        {answersArray[3].answer}
      </button>
    </div>
  );
}
