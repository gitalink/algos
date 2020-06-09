
// given a string of digits (e.g. phone number) and a dialpad that maps numbers to letters, return all the possible words you could make.

function letterCombinations(digits) {
  if (!digits.length) return []
  const buffer = new Array(digits.length)
  const result = []
  findCombos(digits, buffer, 0, 0, result)
  return result
}

function findCombos(digits, buffer, i, bufferIndex, result) {
  if (i === digits.length || bufferIndex === digits.length) {
      result.push(buffer.join(''))
      return
  }

  const letters = getLetters(digits[i])
  if (!letters.length ) {
      findCombos(digits, buffer, i+1, bufferIndex, result)
  }
  for (let j = 0; j < letters.length; j++) {
      buffer[bufferIndex] = letters[j]
      findCombos(digits, buffer, i+1, bufferIndex+1, result)
  }
}


function getLetters(char) {
  switch (char) {
      case '1':
          return []
          break
      case '2':
          return ['a', 'b', 'c']
          break
      case '3':
          return ['d','e','f']
          break
      case '4':
          return ['g','h','i']
          break
      case '5':
          return ['j', 'k', 'l']
          break
      case '6':
          return ['m', 'n', 'o']
      case '7':
          return ['p','q', 'r', 's']
          break
      case '8':
          return ['t','u','v']
          break
      case '9':
          return ['w', 'x', 'y', 'z']
      default:
          return []

  }
}

console.log(letterCombinations('824'))
