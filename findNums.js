/*

Write a function solution that, given an array A of N integers, returns the largest integer K > 0 such that both values K and −K (the opposite number) exist in array A. If there is no such integer, the function should return 0.
1. Given A = [3, 2, −2, 5, −3], the function should return 3 (both 3 and −3 exist in array A).
2. Given A = [1, 1, 2, −1, 2, −1], the function should return 1 (both 1 and −1 exist in array A).
3. Given A = [1, 2, 3, −4], the function should return 0
*/

const test_cases = [
  {input: [3, 2, -2, 5, -3], output: 3},
  {input: [1, 1, 2, -1, 2, -1], output: 1},
  {input: [1, 2, 3, -4], output: 0},
  {input: [], output: 0},
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
    else console.log("All clear")
  }
}

assert(test_cases, findNum)

// function findNum(arr) {
//   if (!arr) return null
//   if (!arr.length) return 0

//   const hashMap = {}
//   const sorted = arr.sort((a, b) => {return b-a})
//   console.log('sorted arr', sorted)

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] <= 0) break
//     if (!hashMap[sorted[i]]) hashMap[arr[i]] = true
//   }
//   console.log('HASHMAP', hashMap)

//   for (let i = sorted.length-1; i >= 0; i--) {
//     if (sorted[i] >= 0) break
//     console.log(sorted[i])
//     const positive = sorted[i] * -1
//     console.log(positive)
//     if (hashMap[positive]) return positive
//   }
//   return 0
// }


// No sort solution O(n) time O(n) space
function findNum(arr) {
  if (!arr) return null
  if (!arr.length) return 0

  const hashMap = {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (!hashMap[arr[i]]) hashMap[arr[i]] = false
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] < 0) {
      const positive = arr[i] * -1
      if (hashMap.hasOwnProperty(positive)) {
        hashMap[positive] = true
      }
    }
  }

 let max = -Infinity
 for (const key in hashMap) {
   if (hashMap[key]) {
     max = Math.max(max, Number(key))
   }
 }

  if (max !== -Infinity) return max
  else return 0
}
