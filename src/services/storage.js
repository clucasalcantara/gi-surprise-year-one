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
