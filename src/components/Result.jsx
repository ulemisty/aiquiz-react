import { useSelector } from 'react-redux';
import strings from "../strings";

function Result() {
  const { correctAnswers, lang } = useSelector((state) => state.quiz);

  return (
    <>
      <div className="card-container">
        <h1>{strings[lang].correctAnswers}</h1>
        <h1>{correctAnswers} / 10</h1>
      </div>
    </>
  )
}

export default Result;