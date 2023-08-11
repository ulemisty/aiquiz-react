import { useEffect } from 'react';
import generateQuestions from '../openaiClient';
import { setQuestions } from '../quizSlice';
import { useSelector, useDispatch } from 'react-redux';
import strings from "../strings";
import cat from "../assets/cat.gif"

function Loading({ onLoaded }) {
    const dispatch = useDispatch();

    const { lang, topic } = useSelector(
        (state) => state.quiz
    );

    const handleLoaded = () => {
        onLoaded();
    };

    useEffect(() => {
        const fetchQuestions = async() => {
            const questions = await generateQuestions(topic, lang);
            dispatch(setQuestions(questions));
            handleLoaded();
        };

        fetchQuestions();
    }, [dispatch]);

    return (
        <>
            <img src={cat} width={210}></img>
            <h1>{strings[lang].loading}</h1>
        </>
    );
}

export default Loading;