import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <button onClick={() => dispatch({ type: "NEW_GAME" })} className="button-pushable" role="button">
              <span className="button-shadow"></span>
              <span className="button-edge"></span>
              <span className="button-front text">
                  Reiniciar
              </span>
        </button>
    </div>
  )
}

export default GameOver