export default function Question(props) {
  console.log(props.data.results[0].question);
  return (
    <div className="question">
      <h1>hello</h1>
      <h2>{props.data.results[0].question}</h2>
    </div>
  );
}
