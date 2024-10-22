import {
  getAnswers,
  storeAnswers,
  storeQuestions,
  getQuestions,
} from '../storage'

export const saveAnswer = (id, isRight) => {
  const answers = getAnswers()
  const questions = getQuestions()
  const question = questions.find((item) => item.id === id)
  question.answered = true
  question.isRight = isRight

  const alreadyExists = answers.find((answerId) => answerId === id)

  if (!alreadyExists) {
    answers.push(id)

    try {
      storeAnswers(answers)
      storeQuestions(questions)

      return true
    } catch (error) {
      throw new Error(`Error saving answer ${error}`)
    }
  }

  return null
}
