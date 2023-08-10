import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        questions: [],
        lang: "english",
        topic: "topic",
        questionsNumber: 10,
        currentIndex: 0,
        correctAnswers: 0
    },
    reducers: {
        setQuestions(state, action){
            state.questions = action.payload;
        },
        setLang(state, action) {
            state.lang = action.payload;
        },
        setTopic(state, action) {
            state.topic = action.payload;
        },
        submitAnswer(state, action) {
            state.currentIndex += 1;
            if (action.payload){
                state.correctAnswers += 1
            }
        },
        nextQuestionIndex: (state) => {
            state.currentIndex += 1;
        },
    }
})

export const { 
    setQuestions,
    setLang,
    setTopic,
    submitAnswer,
    nextQuestionIndex
  } = quizSlice.actions;
  
export default quizSlice.reducer;