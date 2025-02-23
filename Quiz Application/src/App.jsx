import { useRef, useState } from "react";
import "./App.css";

function App() {
  const questionDisplay = useRef(null);
  const nextButton = useRef(null);
  const resultDisplay = useRef(null);
  const startDisplay = useRef(null);
  const liElementDisplay = useRef(null);
  const [questions, setQuestions] = useState([
    {
      question: "what is the capital of France ?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 5,
    },
    {
      question: "which planet is known as the Red planet ?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 5,
    },
    {
      question: "who wrote 'Hamlet' ?",
      choices: [
        "Charles Dickens",
        "Jame Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 5,
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handelAnswerClick = (selectedChoice) => {
    if (selectedChoice === questions[currentQuestion].answer) {
      setScore(score + questions[currentQuestion].marks);
      liElementDisplay.classList.add("bg-green-500");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full font-serif">
        <div
          id="container"
          className="bg-slate-700 rounded-md  w-fit h-fit text-center flex-nowrap"
        >
          <h1
            ref={startDisplay}
            className="text-[35px] font-bold m-10 text-center"
          >
            Quizz App
          </h1>
          <div id="quiz-container">
            {showScore ? (
              <div className={`text-[40px]  font-bold `} ref={resultDisplay}>
                <h2 className="m-4">Marks Obtained : {score}</h2>

                <h2>Out of : {questions.length * 5}</h2>
                <button
                  id="restart-btn"
                  className="bg-purple-600 text-white p-2 rounded-sm mt-2 mb-7 text-[20px]"
                  onClick={() => {
                    startDisplay.current.classList.remove("hidden");
                    resultDisplay.current.classList.add("hidden");
                  }}
                >
                  Restart Quizz
                </button>
              </div>
            ) : (
              <>
                <div
                  className={`text-[20px] 
                  p-5 mx-auto max-w-lg
                  bg-slate-700 text-white hidden`}
                  ref={questionDisplay}
                >
                  <h1 className="text-[30px] text-wrap font-bold ml-3 mr-3">
                    {questions[currentQuestion].question}
                  </h1>
                  <ul>
                    {questions[currentQuestion].choices.map((choice, index) => (
                      <li
                        ref={liElementDisplay}
                        key={index}
                        onClick={() => {
                          nextButton.current.classList.remove("hidden");
                          handelAnswerClick(choice);
                        }}
                        className={`p-5 my-2 rounded-lg cursor-pointer bg-slate-950 `}
                      >
                        {choice}
                      </li>
                    ))}
                  </ul>
                  <button
                    ref={nextButton}
                    id="next-btn"
                    className={`bg-purple-600 text-white p-2 rounded-sm mt-2 mb-7 text-[20px] hidden`}
                    onClick={() => {
                      handelAnswerClick();
                    }}
                  >
                    Next Question
                  </button>
                </div>
              </>
            )}
            <button
              ref={startDisplay}
              id="start-btn"
              className="bg-purple-600 text-white p-2 rounded-sm mt-2 mb-7 text-[20px] "
              onClick={() => {
                startDisplay.current.classList.add("hidden");
                questionDisplay.current.classList.remove("hidden");
              }}
            >
              Start Quizz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
