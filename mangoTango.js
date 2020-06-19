//'ilikemangotango'
const dict = ['i', 'like', 'mango', 'tango', 'man', 'tan', 'go']

function getWords(string, dict) {
  const memo = {}
  const result = []
  if (getWordsHelper(string, dict, 0, result, memo)) {
    return result
  }
  return null
}

function getWordsHelper(string, dict, start, result, memo = {}) {

  if (start === string.length) {
    return true
  }
  if (memo[start] === 'not_found') {
    return false
  }

  for (let i = start; i < string.length; i++) {
    const word = string.slice(start, i+1)
    if (dict.includes(word)) {
      result.push(word)
      if (getWordsHelper(string, dict, i+1, result, memo)) {
        return true
      }
      else {
        result.pop()
        memo[i] = 'not_found'
      }
    }
  }
  return false
}

console.log(getWords('ilikemangotango', dict))
console.log(getWords('ilikemangotanno', dict))
