/*
Remove all duplicates from an array while preserving the order.
Example
Input: [1, 2, 9, 1, 8, 2, 4, 8, 5, 6, 9, 2]
Output: [1, 2, 9, 8, 4, 5, 6]
*/

const test_cases = [
  {input: [1, 3, 5, 0, 0, 0, 1,3], output: []},
  {input: [1, 1, 1, 2], output: [1,2]},
  {input: [1,1,1,1,1,1], output: [1]},
  {input: [1], output: [1]},
  {input: [], output: []},
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

function removeDups(arr) {
  if (arr === null || !arr.length) return arr
  const hashMap = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    if (!hashMap[num]) {
      result.push(num)
      hashMap[num] = true
    }
  }
  return result
}

assert(test_cases, removeDups)
console.log(removeDups([1, 2, 9, 1, 8, 2, 4, 8, 5, 6, 9, 2]))
