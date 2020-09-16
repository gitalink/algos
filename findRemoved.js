/*
You are given two arrays as inputs. Assume one array is of non-negative integers. The second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
*/

// test function

const test_cases = [
  {input: [[1, 3, 5, 0], [0, 3, 5]], output: 1},
  {input: [[1, 1, 1, 2], [1,1,1]], output: 2},
  {input: [[5, 7, 3, 2, 0], [2, 0, 7, 5]], output: 3},
  {input: [[1], []], output: 1},
  {input: [[1, 1, 1, 0], [1, 1, 1]], output: 0},
  {input: [[], []], output: 'Array was empty'},
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

assert(test_cases, findRemoved)

function findRemoved(arr1, arr2) {
  if (!arr1.length) return 'Array was empty'
  const arr1Sum = arr1.reduce(((sum, num) => {return sum+num}), 0)
  const arr2Sum = arr2.reduce(((sum, num) => {return sum+num}), 0)
  return arr1Sum - arr2Sum
}


