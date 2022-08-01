import Question from "./Question";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Questionnaire(props) {
  // Trying to add a button function that will deselect all buttons
  // then highlight the clicked button. Changing the state
  // Use the state to compare isSelected with isCorrect to log score
  // If correct&&selected green, selected&&!correct red

  const [tempData, setTempData] = useState(0);

  function togData(questionId, num) {
    console.log("togData" + "-" + num + "-" + questionId);

    setTempData((prevTempData) => {
      const newTempData = prevTempData.map((obj) => {
        if (obj.props.id === questionId) {
          let newAnswersArray = [...obj.props.answersArray];

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

          let newProps = { ...obj.props, answersArray: newAnswersArray };

          return { ...obj, props: newProps };
        }
        return obj;
      });
      return newTempData;
    });
  }

  console.log("run Quest");

  // After initial render,  set the Que data
  useEffect(() => {
    setTempData(
      props.data.map((element) => {
        console.log("newIds");
        return (
          <Question
            key={nanoid()}
            id={nanoid()}
            question={element.question}
            answersArray={element.answersArray}
            toggleIsSelected={props.toggleIsSelected}
            togData={togData}
          />
        );
      })
    );
  }, []);

  useEffect(() => {
    console.log(tempData);
  });

  return (
    <div className="questionnaire">
      <h1> Questionnaire</h1>
      {tempData}
      <button onClick={props.toggleCheck}>Check answer</button>
    </div>
  );
}
