import { useEffect } from "react";

export default function Question(props) {
  function styles(x) {
    const answer = props.answersArray[x];
    if (props.checked === false) {
      return {
        backgroundColor: answer.isSelected ? "#D6DBF5" : "",
        border: answer.isSelected ? "" : "1px solid #4d5b9e",
        color: "#293264",
      };
    } else if (props.checked === true) {
      if (answer.isCorrect) {
        return {
          backgroundColor: "#94D7A2",
          color: "#4D5B9E",
        };
      }
      if (!answer.isCorrect && answer.isSelected) {
        return {
          backgroundColor: "#F8BCBC",
          color: "#4D5B9E",
          opacity: "0.5",
        };
      } else {
        return {
          opacity: "0.5",
          border: "1px solid #4d5b9e",
        };
      }
    }
  }

  return (
    <div className="question">
      <h2>{props.question}</h2>
      <div className="buttons">
        <button
          className="answer"
          style={styles(0)}
          onClick={() => props.togData(props.id, 0)}
        >
          {props.answersArray[0].answer}
        </button>
        <button
          className="answer"
          style={styles(1)}
          onClick={() => props.togData(props.id, 1)}
        >
          {props.answersArray[1].answer}
        </button>
        <button
          className="answer"
          style={styles(2)}
          onClick={() => props.togData(props.id, 2)}
        >
          {props.answersArray[2].answer}
        </button>
        <button
          className="answer"
          style={styles(3)}
          onClick={() => props.togData(props.id, 3)}
        >
          {props.answersArray[3].answer}
        </button>
      </div>
      <hr></hr>
    </div>
  );
}
