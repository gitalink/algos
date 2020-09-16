/*
Write a function solution that, given a string S consisting of N characters, returns the alphabetically smallest string that can be obtained by removing exactly one letter from S.:
1. Given S = "acb", by removing one letter, you can obtain "ac", "ab" or "cb". Your function should return "ab" (after removing 'c') since it is alphabetically smaller than "ac" and "bc".
2. Given S = "hot", your function should return "ho", which is alphabetically smaller than "ht" and "ot".
3. Given S = "codility", your function should return "cdility", which can be obtained by removing the second letter.

*/
const test_cases = [
  {input: 'acb', output: "ab"},
  {input: "hot", output: "ho"},
  {input: "codility", output:"cdility" },
  {input: "", output: ""},
  {input: null, output: null},
]

function assert (tests, myFunction) {
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i]
    let input = test.input
    let expected = test.output
    let actual = myFunction(input)
    if (expected !== actual) {
       console.log("With input ", input, " Expected ", expected,  ", but got ",  actual)
    }
  }
}

function smallest(S) {

  if (S === null || !S.length) return S

  let removeIndex = -1
  console.log(removeIndex)

  for (let i = 0; i < S.length-1; i++) {
    console.log('I', S[i], "I+1", S[i+1])
    const char = S[i]
    if (S[i] > S[i+1]) {
      removeIndex = i
      break
    }
  }
  if (removeIndex === -1) return S.slice(0, S.length-1)
  else return S.slice(0, removeIndex) + S.slice(removeIndex+1, S.length)
}

assert(test_cases, smallest)
