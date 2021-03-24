import dataset from './questions/dataset'

// Answers
export const getAnswers = () => {
  const answers = localStorage.getItem('formylove')
  if (answers) return JSON.parse(answers)

  return []
}

export const storeAnswers = (answers) =>
  localStorage.setItem('formylove', JSON.stringify(answers))

export const storeAnswer = (questionId) => {
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

// Questions
export const storeQuestions = (questions) =>
  localStorage.setItem('formylove-questions', JSON.stringify(questions))

export const getQuestions = () => {
  const questions = localStorage.getItem('formylove-questions')
  if (questions) return JSON.parse(questions)

  storeQuestions(dataset)

  return dataset
}

export const getScore = () => {
  const questions = localStorage.getItem('formylove-questions')

  if (questions) {
    const answered = JSON.parse(questions)
    console.log({ answered })

    return answered.filter((question) => question.answered).length
  }

  return [].length
}

export const getAvailableTips = () => {
  const tips = localStorage.getItem('formylove-tips')

  if (tips) {
    return JSON.parse(tips)
  }

  return []
}

export const storeTips = (tips) =>
  localStorage.setItem('formylove-tips', JSON.stringify(tips))
