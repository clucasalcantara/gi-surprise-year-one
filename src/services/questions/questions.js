import { getQuestions } from '../storage'

export const getQuestionByDate = (date) => {
  const questions = getQuestions()

  return questions.find((question) => {
    const questionDate = new Date(question.releaseDate).getTime()

    return questionDate === date
  })
}

export const getQuestionById = (id) => {
  const questions = getQuestions()

  return questions.find((question) => question.id === id && !question.answered)
}
