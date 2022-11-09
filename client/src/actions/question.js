// This action is used to be called in the dispatch function when asking a question in AskQuestion.jsx file
import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data})
        // dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}