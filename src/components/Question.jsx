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

  return (
    <div className="question">
      <h2>{props.question}</h2>
      <button className="answer1">{answersArray[0].answer}</button>
      <button className="answer2">{answersArray[1].answer}</button>
      <button className="answer3">{answersArray[2].answer}</button>
      <button className="answer4">{answersArray[3].answer}</button>
    </div>
  );
}
