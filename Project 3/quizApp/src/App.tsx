import "./App.css";
import data from "./data.json";
import { MouseEventHandler, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CardProps {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  options: string[];
  changeQuestion: MouseEventHandler<HTMLButtonElement>;
}

const Card: React.FC<CardProps> = ({
  category,
  difficulty,
  question,
  correct_answer,
  options,
  changeQuestion,
}) => {
  const [score, setScore] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(0);
  const analyseOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedOption = e.currentTarget.textContent ?? "";
    if (selectedOption === correct_answer) setScore(score + 1);
    setQuestionAnswered(questionAnswered + 1);
    changeQuestion(e);
  };
  const isLastQuestion = questionAnswered === 10;

  if (!isLastQuestion) {
    return (
      <div className="card">
        <div className="question-details">
          <p className="question">{question}</p>
          <p className="category">{category}</p>
          <p className={difficulty}>{difficulty}</p>
        </div>
        <div className="options">
          {options.map((el) => (
            <button key={el} onClick={analyseOption}>
              {el}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    const styles = {
      transform: "rotate(0.25turn)",
      transformOrigin: "center center",
    };
    return (
      <div className="card">
        <p className="category">Your Final Score :</p>
        <div className="score-holder">
          <CircularProgressbar
            value={score * 10}
            text={`${score}`}
            styles={styles}
          />
        </div>
      </div>
    );
  }
};

function App() {
  const [currObj, setCurrObj] = useState(0);
  const changeQuestion = () => {
    if (currObj < 10) setCurrObj(currObj + 1);
  };
  return (
    <>
      <Card {...data.results[currObj]} changeQuestion={changeQuestion} />
    </>
  );
}

export default App;
