export default function Question(props) {
  const styles = {
    backgroundColor: props.answersArray[0].isSelected ? "black" : "pink",
    color: props.answersArray[0].isSelected ? "green" : "white",
  };
  return (
    <div className="question">
      <h2>{props.question}</h2>
      <button
        className="answer1"
        style={styles}
        onClick={() => props.togData(props.id, 0)}
      >
        {props.answersArray[0].answer}
      </button>
      <button
        className="answer2"
        onClick={() => props.toggleIsSelected(props.id, 1)}
      >
        {props.answersArray[1].answer}
      </button>
      <button
        className="answer3"
        onClick={() => props.toggleIsSelected(props.id, 2)}
      >
        {props.answersArray[2].answer}
      </button>
      <button
        className="answer4"
        onClick={() => props.toggleIsSelected(props.id, 3)}
      >
        {props.answersArray[3].answer}
      </button>
    </div>
  );
}
