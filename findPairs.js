/*
Given an integer k and a list of integers, count the number of distinct valid pairs of integers (a, b) in the list for which a + k = b. Two pairs of integers (a, b) and (c, d) are considered distinct if at least one element of (a, b) does not also belong to (c, d).


Example

n = 4

numbers = [1, 1, 1, 2]

k = 1

This array has two different valid pairs: (1, 1) and (1, 2). For k = 1, there is only 1 valid pair which satisfies a + k = b: the pair (a, b) = (1, 2).

*/

const test_cases = [
  {input: [[1, 3, 5, 0], 2], output: [[1,3], [3, 5]]},
  {input: [[1, 1, 1, 2], 1], output: [[1,2]]},
  {input: [[5, 7, 3, 2, 0], 5], output: [[2, 7], [0, 5]]},
  {input: [[1, 1], 1], output: [[]]},
  {input: [[1, 1, 1, 1], 2], output: [[]]},
  {input: [[], 2], output: [[]]},
]

function assert (tests, myFunction) {
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i]
    let input = test.input
    let expected = test.output
    let actual = myFunction(input[0], input[1])
    if (expected !== actual) {
       console.log("With input ", input, " Expected ", expected,  ", but got ",  actual)
    }
  }
}

function findPairs(arr, k) {

  const result = []
  const bMap = {}
  const aMap = {}

  for (let i = 0; i < arr.length; i++) {
    if (!bMap[arr[i]]) {
      bMap[arr[i]] = true
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i]
    const b = a + k
    if (bMap[b] && !aMap[a]) {
      result.push([a, b])
      aMap[a] = true
    }
  }

  return result
}
console.log(findPairs([1, 3, 5, 0], 2))
console.log(findPairs([1, 1, 1, 2], 1))
console.log(findPairs([5, 7, 3, 2, 0], 5))

assert(test_cases, findPairs)

// brute force
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i+1; j < arr.length; j++) {
  //     if (arr[i] + k === arr[j]) {
  //       result.push([arr[i], arr[j]])
  //       console.log([arr[i], arr[j]])
  //     }
  //   }
  // }
  // to do:  filter duplicates
