import dataset from './questions/dataset'

export const getAnswers = () => {
  const answers = localStorage.getItem('formylove')
  if (answers) return JSON.parse(answers)

  return []
}

export const saveAnswer = (questionId) => {
  const answers = getAnswers()
  const alreadyExists = answers.find((id) => id === questionId)

  if (!alreadyExists) {
    answers.push(questionId)

    try {
      localStorage.setItem('formylove', JSON.stringify(answers))

      return true
    } catch (error) {
      throw new Error(`Error saving answers: ${error}`)
    }
  }

  return null
}

export const getScore = () => {
  const answers = localStorage.getItem('formylove')
  if (answers) return JSON.parse(answers).length

  return [].length
}

export const fillDataset = () =>
  localStorage.setItem('formylove-questions', JSON.stringify(dataset))

export const getQuestions = () => {
  const questions = localStorage.getItem('formylove-questions')
  if (questions) return JSON.parse(questions)

  fillDataset(dataset)

  return dataset
}
