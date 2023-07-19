import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
    <h2>Seja bem-vindo</h2>
    <p>Clique no botão abaixo para começar:</p>
          <button onClick = {() => dispatch({type: "CHANGE_STATE"})} className="button-pushable" role="button">
              <span className="button-shadow"></span>
              <span className="button-edge"></span>
              <span className="button-front text">
                  Iniciar
              </span>
          </button>
    <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Welcome;