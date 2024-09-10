import React, { useState, useEffect } from "react";
import { lesson_data } from "../Assets/lessondata";
import { useNavigate } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateQuestions(data) {
  const questions = data.map((item) => {
    const correctOption = item.image;
    const options = [correctOption];
    const indicesUsed = [data.indexOf(item)];
    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!indicesUsed.includes(randomIndex)) {
        options.push(data[randomIndex].image);
        indicesUsed.push(randomIndex);
      }
    }
    shuffleArray(options);
    const correctAnswer = options.indexOf(correctOption) + 1;
    return {
      question: `Choose the image for: ${item.name}`,
      options,
      ans: correctAnswer,
    };
  });
  shuffleArray(questions);
  return questions;
}

function Game2() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem("highScore") || "0"));
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(generateQuestions(lesson_data));
  }, []);

  const handleAnswerOptionClick = (optionIndex) => {
    const isCorrect = optionIndex === questions[currentQuestionIndex].ans;
    setSelectedOption(optionIndex);
  
    setTimeout(() => {
      if (isCorrect) {
        alert(`အဖြေမှန်ပါတယ်! သင့်အဖြေသည် မှန်ကန်ပါတယ်။`);  // Congratulatory alert
        setScore(score + 1);
      } else {
        alert(`သင်၏အဖြေ မှားယွင်းနေပါတယ် အဖြေမှန်သည် option ${questions[currentQuestionIndex].ans} ဖြစ်ပါတယ်`);
      }

      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedOption(null);
      } else {
        setShowScore(true);
        updateHighScore(score + (isCorrect ? 1 : 0));
      }
    }, 1000);
  };

  const updateHighScore = (newScore) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem("highScore", newScore.toString());
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
    setSelectedOption(null);
    setQuestions(generateQuestions(lesson_data));
  };

  const exitGame = () => {
    if (window.confirm("ဂိမ်းကထွက်ရန် သေချာပြီလား?")) {
        navigate('/game');
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-6">QUIZ</h1>
      {showScore ? (
        <div className='text-center text-lg leading-7'>
          <div className='mb-4'>{questions.length}ပုဒ်တွင် {score}ပုဒ် အဖြေမှန်ပါတယ်</div>
          <div className='mb-4'>သင်၏ အမြင့်ဆုံး ရလဒ်အမှတ်သည် {highScore}မှတ် ဖြစ်ပါတယ်</div>
          <button onClick={restartQuiz} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            ဂိမ်းပြန်ကစားမည်
          </button>
          <button onClick={exitGame} className='mt-4 ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            ဂိမ်းကထွက်မည်
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4 font-bold text-xl text-center">
            {questions.length > 0 && questions[currentQuestionIndex].question}
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              {questions.length > 0 && questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index + 1)}
                  className={`text-white font-bold py-3 px-3 rounded-lg text-lg ${
                    selectedOption === index + 1
                      ? selectedOption === questions[currentQuestionIndex].ans
                        ? "border-4 border-green-500"
                        : "border-4 border-red-500"
                      : "border border-[#2F4858]"
                  }`}
                  style={{ width: "150px", height: "150px" }}
                  disabled={selectedOption !== null}
                >
                  <img src={option} alt="quiz option" className="max-w-full h-auto"/>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Game2;
