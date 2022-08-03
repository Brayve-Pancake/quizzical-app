import Question from "./Question";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Questionnaire(props) {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [tempData, setTempData] = useState(formatData());

  function formatData() {
    return props.data.map((element) => {
      return (
        <Question
          key={nanoid()}
          id={element.id}
          question={element.question}
          answersArray={element.answersArray}
          togData={togData}
          checked={checked}
        />
      );
    });
  }

  function updateData(bool) {
    // Update the checked status, create replacement objects
    setTempData((prevTempData) => {
      prevTempData.forEach((obj) => {
        obj.props.checked = bool;
      });
      return prevTempData.map((obj) => {
        let newAnswersArray = [...obj.props.answersArray];
        let newProps = { ...obj.props, answersArray: newAnswersArray };

        return { ...obj, props: newProps };
      });
    });
  }

  function togData(questionId, num) {
    setTempData((prevTempData) => {
      return prevTempData.map((obj) => {
        const element = obj.props;
        if (element.id === questionId) {
          let newAnswersArray = [...element.answersArray];

          // Set all to false on Select, switching the selected.
          for (let i = 0; i < 5; i++) {
            if (i === num) {
              newAnswersArray[num] = {
                ...newAnswersArray[num],
                isSelected: !newAnswersArray[num].isSelected,
              };
            } else {
              newAnswersArray[i] = {
                ...newAnswersArray[i],
                isSelected: false,
              };
            }
          }

          let newProps = { ...element, answersArray: newAnswersArray };

          return { ...obj, props: newProps };
        }
        return obj;
      });
    });
  }

  console.log("run Quest");

  useEffect(() => {
    console.log(tempData);
  });

  function checkAnswers() {
    // Check if each question has an answer
    let counter = 0;
    tempData.forEach((question) => {
      question.props.answersArray.forEach((answer) => {
        if (answer.isSelected) {
          counter++;
        }
      });
    });

    if (counter < 5) {
      alert("answer all Qs");
      return;
    }

    // Count correct number of answers
    tempData.forEach((object) => {
      const obj = object.props.answersArray;
      obj.forEach((ans) => {
        if (ans.isCorrect && ans.isSelected) {
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }
      });
    });
    setChecked(true);
    updateData(true);
  }

  function playAgain() {
    window.location.reload();
  }

  useEffect(() => {
    console.log(count);
  });

  return (
    <div className="questionnaire">
      {tempData}
      {checked && <p className="score">You scored {count}/5 correct answers</p>}
      <button className="end-game" onClick={checked ? playAgain : checkAnswers}>
        {checked ? "Play again" : "Check Answers"}
      </button>
    </div>
  );
}
