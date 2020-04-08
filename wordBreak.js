// given string S witl letters and no spaces, find if it can be broken into valid words.
// imagine you are given a dictionary to check
dict = {i:true, like:true, mango:true, tango:true, man:true, tan:true, go:true}

function wordBreak(string, dict) {
  const memo = {}
  const result = []

  if (findWords(string, start=0, dict, result, memo)) {
    return result
  }
  else return 'not possible'
}

function findWords(string, start=0, dict, result=[], memo={}) {
  console.log('START', start)
  console.log('memo', memo)
  console.log(dict)
  if (start === string.length) {
    return true
  }
  if (memo.hasOwnProperty(start)) {
    return false
  }

  for (let i = start; i < string.length; i++) {
    console.log('I', i )
    console.log('word', string.slice(start, i+1))
    console.log('word in dict', dict[string.slice(start, i+1)])
    if (dict[string.slice(start, i+1)]) {
      console.log('word found in dict')
      result.push(string.slice(start, i+1))
      console.log('result', result)
      if (findWords(string, i+1, dict, result, memo)) {
        return true
      }
      else {
        result.pop()
        memo[i+1] = 'not_found'
      }
    }
  }

}

console.log(wordBreak('ilikemangotange', dict))
