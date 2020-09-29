
/*

Word Ladder Problem: You are given 2 words A and B, both of the same length. Your task is to transform one word to another changing only one letter each time. Each intermediate word should be a valid word in the dictionary. Print out the length of the path. (Alternate version: print out the intermediate words)

example
A = CAB, B = DOG
Result: 4 (CAB -> COB -> COG -> DOG)

Approach:

// look at words as a graph where words are connected if one letter is changed
// traverse through grapg until you find the target word, keep track of level of node in a map of word - level
// preprocess the dictionary into possible generic words , eg CAB = *AB, C*B, CA*
// build a map of generics to words
// traverse through words until you find target and return its level
*/

const dict = ['cab', 'cob', 'cog', 'dog']

function wordLadder(a, b, dict) {
  const visitedWords = new Map()
  const genericsMap = makeDictMap(dict)
  console.log('generics', genericsMap)


  const queue = []
  visitedWords.set(a, 1)
  queue.push(a)

  while(queue.length) {
    console.log('QUEUE AT START OF LOOP', queue)
    const current = queue.shift()
    console.log('CURRENT', current)
    const level = visitedWords.get(current)
    if (current === b) return level
    console.log('LEVEL', level)
    const currentsGenerics = makeDictMap([current]).keys()
    console.log('currentsGenerics', currentsGenerics)
    for (const generic of currentsGenerics) {
      const words = genericsMap.get(generic)
      console.log('GENERICS WORDS', words)
      for (const word of words) {
        console.log('word', word)
        if (word === b) return level+1
        if (!visitedWords.has(word)) {
          visitedWords.set(word, level+1)
          console.log('adding to visited', visitedWords)
          queue.push(word)
        }
      }
    }
  }
 return -1
}

function makeDictMap(dict) {
  const map = new Map()
  for (let i = 0; i < dict.length; i++) {
    const word = dict[i]
    for (let j = 0; j < word.length; j++) {
      const wordArr = word.split('')
      wordArr[j] = '*'
      const generic = wordArr.join('')
      map.has(generic) ? map.get(generic).push(word) : map.set(generic, [word])
    }
  }
  return map
}

console.log(makeDictMap(dict))
console.log(wordLadder('cab', 'dog', dict ))
