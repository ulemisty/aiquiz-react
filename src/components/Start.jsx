import { useDispatch, useSelector } from "react-redux";
import { setLang, setTopic } from "../quizSlice";
import strings from "../strings";
import king from "../assets/king.png"

const Start = ({ onButtonClick }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.quiz.lang);
  const topic = useSelector((state) => state.quiz.topic);

  const handleLangChange = (event) => {
    dispatch(setLang(event.target.value));
    console.log(lang);
  };

  const handleTopicChange = (event) => {
    dispatch(setTopic(event.target.value));
    console.log(topic);
  };

  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <div className="start-container">
      <img src={king} height={210} alt="logo" className="logo" />
      <h1>{strings[lang].welcomeMessage}</h1>
      <div className="input-container">
        <input
          type="text"
          id="theme-input"
          name="theme"
          placeholder="Topic"
          value={topic}
          onChange={handleTopicChange}
          className="input-field"
        />
      </div>
      <div className="select-container">
        <select defaultValue={lang} onChange={handleLangChange} className="select-field">
          <option value="english">English</option>
          <option value="chinese">中文</option>
          <option value="spanish">Español</option>
          <option value="portuguese">Português</option>
          <option value="russian">Русский</option>
          <option value="japanese">日本語</option>
          <option value="korean">한국어</option>
          <option value="french">Français</option>
          <option value="german">Deutsch</option>
          <option value="italian">Italiano</option>
          <option value="turkish">Türkçe</option>
          <option value="arabic">العربية</option>
          <option value="ukrainian">Українська</option>
          <option value="hindi">हिन्दी</option>
          <option value="vietnamese">Tiếng Việt</option>
        </select>
      </div>
      <button
        type="submit"
        aria-label="Start"
        onClick={handleButtonClick}
        className="start-button"
      >
        {strings[lang].startButton}
      </button>

      <a
        className="github-button"
        href="https://github.com/ulemisty"
        aria-label="Follow @ulemisty on GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow @ulemisty on GitHub
      </a>
    </div>
  );
};

export default Start;
