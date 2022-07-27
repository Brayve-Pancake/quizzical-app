export default function Question(props) {
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
