import Question from "./Question";

export default function Questionnaire(props) {
  return (
    <div className="questionnaire">
      <h1> Questionnaire</h1>
      <Question data={props.data} />
    </div>
  );
}
