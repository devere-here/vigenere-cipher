const generateCipherMatrix = () => {
  const matrix = []

  for (let i = 0; i < 26; i++) {
    const row = []
    for (let j = 0; j < 26; j++) {
      const letterPosition = (i + j) % 26
      const letter = String.fromCharCode(letterPosition + 65)

      row.push(letter)
    }
    matrix.push(row)
  }

  return matrix
}

const matrix = generateCipherMatrix()

export const cipher = (text, encryptionKey, action) => {
  const input = text.toUpperCase()
  const key = encryptionKey.toUpperCase()

  let outputStr = ''
  for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 90) {
      outputStr += input[i]
    } else {
      const letterPositionInAlphabet = input.charCodeAt(i) - 65
      const keyPositionInAlphabet = key.charCodeAt(i % key.length) - 65

      if (action === 'encrypt') {
        outputStr += matrix[letterPositionInAlphabet][keyPositionInAlphabet]
      } else {
        const letterIndex = matrix[keyPositionInAlphabet].findIndex(letter => letter === input[i]);
        outputStr += String.fromCharCode(letterIndex + 65)
      }
    }
  }

  return outputStr
}
