import quizCompleteImg from "../assets/quiz-complete.png";
import Questions from "../questions";

function Summary({ userAnswers }) {
  const skipAnswer = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, i) => answer === Questions[i].answers[0]
  );

  const skipAnswerShare = Math.round(
    (skipAnswer.length / userAnswers.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - skipAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Correct Answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Incorrect Answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += "Skipped";
          } else if (answer === Questions[i].answers[0]) {
            cssClass += "Correct";
          } else {
            cssClass += "Wrong";
          }

          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className="question">{Questions[i].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
