export default function Welcome(props) {
  return (
    <div className="welcome">
      <h1 className="welcome--title">Quizzical</h1>
      <h4 className="welcome--body">
        If you think you know animals, try hitting 5 on 5
      </h4>
      <button className="welcome--button" onClick={props.toggleDisplay}>
        Start Quiz
      </button>
    </div>
  );
}
