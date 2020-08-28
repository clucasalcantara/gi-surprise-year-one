import { getAnswers, getQuestions } from '../storage'

export const saveAnswer = (id) => {
  const answers = getAnswers()
  const questions = getQuestions()
  const question = questions.find((item) => item.id === id)
  question.answered = true

  const alreadyExists = answers.find((answerId) => answerId === id)

  if (!alreadyExists) {
    answers.push(id)

    try {
      localStorage.setItem('formylove', JSON.stringify(answers))
      localStorage.setItem('formylove-questions', JSON.stringify(questions))

      return true
    } catch (error) {
      throw new Error(`Error saving answer ${error}`)
    }
  }

  return null
}
