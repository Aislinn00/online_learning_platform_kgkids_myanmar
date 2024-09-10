import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// All 25 Burmese letters
const letters = [
    "က", "ခ", "ဂ", "င", "စ", "ဆ", "ဇ", "ည",
    "တ", "ထ", "ဒ", "ဓ", "န",
    "ပ", "ဖ", "ဗ", "ဘ", "မ", "ယ", "ရ", "လ", "ဝ", "သ",
    "ဟ","အ"
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateQuestions(letters) {
    const questions = letters.map(letter => {
        const options = [letter];
        while (options.length < 4) {
            const randomOption = letters[Math.floor(Math.random() * letters.length)];
            if (!options.includes(randomOption)) {
                options.push(randomOption);
            }
        }
        shuffleArray(options);
        const correctAnswer = options.indexOf(letter) + 1;  // 1-based index for correct answer
        return { question: `${letter} ကို ရွေးပါ`, options, ans: correctAnswer };
    });
    shuffleArray(questions); // Shuffle the questions for randomness
    return questions;
}

function Game1() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        const savedHighScore = localStorage.getItem('highScore');
        return savedHighScore ? parseInt(savedHighScore) : 0;
    });
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(generateQuestions(letters));
    }, []);

    const handleAnswerOptionClick = (optionIndex) => {
        setSelectedOption(optionIndex);
        const isCorrect = optionIndex === questions[currentQuestionIndex].ans;
        if (isCorrect) {
            setScore(score + 1);
            setFeedback(<span className='text-[#00C999]'>"သင်၏အဖြေမှန်ကန်ပါတယ်"</span>);
        } else {
            setFeedback(`သင်၏အဖြေ မှားယွင်းနေပါတယ် အဖြေမှန်သည် '${questions[currentQuestionIndex].options[questions[currentQuestionIndex].ans - 1]}' ဖြစ်ပါတယ်`);
        }

        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
                setSelectedOption(null);
                setFeedback("");
            } else {
                setShowScore(true);
                if (score + (isCorrect ? 1 : 0) > highScore) {
                    setHighScore(score + (isCorrect ? 1 : 0));
                    localStorage.setItem('highScore', (score + (isCorrect ? 1 : 0)).toString());
                }
            }
        }, 2000);
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
        setSelectedOption(null);
        setFeedback("");
        setQuestions(generateQuestions(letters));
    };

    const exitGame = () => {
        const confirmation = window.confirm("ဂိမ်းကထွက်ရန် သေချာပြီလား?");
        if (confirmation) {
            navigate('/game'); // Navigate back to Game.jsx page
        }
    };

    return (
        <div className="container mx-auto p-7">
            <h1 className="text-center text-3xl font-bold mb-6">QUIZ</h1>
            {showScore ? (
                <div className='text-center text-lg leading-7'>
                    <div className='mb-4'> {questions.length}ပုဒ်တွင် {score}ပုဒ် အဖြေမှန်ပါတယ် </div>
                    <div className='mb-4'>သင်၏ အမြင့်ဆုံး ရလဒ်အမှတ်သည် {highScore}မှတ် ဖြစ်ပါတယ်</div>
                    <button onClick={restartQuiz} className='mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>ဂိမ်းပြန်ကစားမည်</button>
                    <button onClick={exitGame} className='mt-4 ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>ဂိမ်းကထွက်မည်</button>
                </div>
            ) : (
                <>
                    <div className='mb-4 font-bold text-xl text-center'>
                        {questions.length > 0 && questions[currentQuestionIndex].question}
                    </div>
                    <div className='text-center text-red-500 mb-3'>{feedback}</div>
                    <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-2 gap-4'>
                            {questions.length > 0 && questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(index + 1)}
                                    className={`text-white font-bold py-4 px-4 rounded-lg ${selectedOption === index + 1 ? (selectedOption === questions[currentQuestionIndex].ans ? 'bg-green-500' : 'bg-red-500') : 'bg-[#008EAB] hover:bg-[#2F4858]'}`}
                                    style={{ fontSize:'2rem' ,width: '100px', height: '100px' }}
                                    disabled={selectedOption !== null}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Game1;
