import { useState, useCallback } from "react";

import Questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;
  const quizIsComplete = activeQuestion === Questions.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });

    [];
  });

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
