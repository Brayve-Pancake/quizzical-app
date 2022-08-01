export default function Question(props) {
  function styles(x) {
    return {
      backgroundColor: props.answersArray[x].isSelected ? "black" : "pink",
      color: props.answersArray[x].isSelected ? "green" : "white",
    };
  }
  return (
    <div className="question">
      <h2>{props.question}</h2>
      <button
        className="answer1"
        style={styles(0)}
        onClick={() => props.togData(props.id, 0)}
      >
        {props.answersArray[0].answer}
      </button>
      <button
        className="answer2"
        style={styles(1)}
        onClick={() => props.togData(props.id, 1)}
      >
        {props.answersArray[1].answer}
      </button>
      <button
        className="answer3"
        style={styles(2)}
        onClick={() => props.togData(props.id, 2)}
      >
        {props.answersArray[2].answer}
      </button>
      <button
        className="answer4"
        style={styles(3)}
        onClick={() => props.togData(props.id, 3)}
      >
        {props.answersArray[3].answer}
      </button>
    </div>
  );
}
