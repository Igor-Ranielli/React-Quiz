import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Question.css';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
    <div id="question">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
            <p>Opções</p>
        </div>
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })} className="button-pushable" role="button">
              <span className="button-shadow"></span>
              <span className="button-edge"></span>
              <span className="button-front text">
                  Continuar
              </span>
        </button>
    </div>
  )
}

export default Question