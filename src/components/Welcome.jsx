export default function Welcome(props) {
  return (
    <div className="welcome">
      <img src="/src/assets/blobs.svg" className="blobOne" alt="blob" />
      <img src="/src/assets/blobs2.svg" className="blobTwo" alt="blob2" />
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
