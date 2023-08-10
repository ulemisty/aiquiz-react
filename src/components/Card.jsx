import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitAnswer } from '../quizSlice';

export default function Card({ onFinish }) {
  const dispatch = useDispatch();

  const handleFinish = () => {
    onFinish();
  };

  const { questionsNumber, currentIndex, questions } = useSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    if (currentIndex >= questions.length - 1) {
      handleFinish();
    }
    randomizeAnswers();
    
  }, [currentIndex]);

  const [answers, setAnswers] = useState([]);

  const randomizeAnswers = () => {
    const currentQuestion = questions[currentIndex];
    const options = currentQuestion.incorrect_answers.concat([currentQuestion.correct_answer]);

    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    setAnswers(options);
  };

  const onAnswer = (selectedAnswer) => {
    if(selectedAnswer == questions[currentIndex].correct_answer){
      dispatch(submitAnswer(true));
    }else{
      dispatch(submitAnswer(false));
    }
    
  };

  return (
    <div className="card-container">
      <div className="question-header">
        <h1>{currentIndex + 1}/{questionsNumber}</h1>
        <h1>{questions[currentIndex].question}</h1>
        
      </div>
      
      <form>
        {answers.map((answer, index) => (
          <div key={index}>
            <button type='button' onClick={() => onAnswer(answer)}>
              {answer}
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}