/*
Two numbers, without leading zeros, are similar if rearranging the digits gives matching numbers, i.e., numbers with the equal frequency of each digit. For example, the numbers 1100 and 1001 are similar, but 1100 and 0110 are not similar because 0110 has a leading zero.
Given two strings that represent long integers a and b, check their similarity. Based on the finding, determine one of the following:
If a and b are similar, find the total number of similar numbers to a.
If a and b are not similar, find the total number of similar numbers to b.
Example
if a = 112 and b = 121, they are similar. Count the 3 numbers similar to a: {112, 121, 211}.
If a = 11 and b = 223, they are not similar. Count the 3 numbers similar to b: {223, 232, 322}.
Function Description
Complete the function findSimilar in the editor below.
findSimilar has the following parameter(s):
    string a:  a string representing a long integer
    string b:  a string representing a long integer
Returns:
     int: long integer, the number of integers similar to a or b as required.
Constraints
1 ≤ numeric values of a and b ≤ 1015
The inputs do not contain ambiguous values. Specifically, there will be no leading zeros such as a = 002, b = 200.

Input Format for Custom Testing
Sample Case 0
Sample Input 0

STDIN      Function
-----      --------
1234   →   a = "1234"
2341   →   b = "2341"


Sample Output 0

24


Explanation 0

Given a = 1234 and b = 2341, they are similar (equal frequency of all digits). Count the numbers similar to a:

{1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321}

The total number of similar numbers is 24.

xplanation 1

Given a = 1100 and b = 1001, they are similar numbers. Count the numbers similar to a:

{1100, 1010, 1001}

The total number of similar numbers is 3.

*/




const test_cases = [
  {input:['112', '121'], output: 3},
  {input:['1100', '0110'], output: null},
  {input: ['1234', '2341'], output: 24},
  {input: ['1100', '1001'], output: 3},
  {input: ['1234', '1213'], output: 12},
]
// assert function to help test my code
function assert (test_cases, myFunction) {
  for (let i = 0; i < test_cases.length; i++) {
      const test = test_cases[i]
      const input1 = test.input[0]
      const input2 = test.input[1]
      const output = test.output
      const actual = myFunction(input1, input2)
      console.log("With input: ", input1, input2, "Expected: ", output, "but got ", actual)
  }
}

function findSimilar(a, b) {
  // Write your code here
  //const cleanA = removeLeadingZeros(a)
 // const cleanB = removeLeadingZeros(b)
  //console.log('clean A', cleanA)
  //console.log('cleanB', cleanB)

  const frequencyA = makeMap(a)
  console.log(frequencyA)
  const frequencyB = makeMap(b)
   console.log(frequencyB)

  let zerosA = 0
  let zerosB = 0

  if (frequencyA['0']) {
      zerosA = frequencyA['0']
  }
  if (frequencyB['0']) {
      zerosB = frequencyB['0']
  }
  console.log('zerosA', zerosA)
  console.log('zerosB', zerosB)

  const repeatsA = getRepeats(frequencyA)
  const repeatsB = getRepeats(frequencyB)

  const similar = areSimilar(frequencyA, frequencyB)
  console.log('are similar', similar)

  if (similar) {
    return countPermutations(a.length, repeatsA, zerosA)
  }
  else {
     return countPermutations(b.length, repeatsB, zerosB)
  }
}

function makeMap(string) {
  const hashMap = {}
  for (let i = 0; i < string.length; i++) {
      !hashMap[string[i]] ? hashMap[string[i]] = 1 : hashMap[string[i]] +=1
  }
  return hashMap
}

function areSimilar(hashMapA, hashMapB) {
  for (const key in hashMapB) {
      if (!hashMapA[key]) return false
      else if (hashMapA[key] === 0 || hashMapA[key] < hashMapB[key]) return false
      else hashMapA[key] -= hashMapB[key]
  }
  for (const key in hashMapA) {
      if (hashMapA[key] !== 0) {
          return false
      }
  }
  return true
}

function getRepeats(repeatsMap) {
  const repeats = []
  for (const key in repeatsMap) {
      if (repeatsMap[key] > 1) {
          repeats.push(repeatsMap[key])
      }
  }
  return repeats
}
console.log()

function countPermutations(n, repeatsArr, numOfZeros) {
   console.log('repeats', repeatsArr)
   let nominator = factorial(n)
   let denominator = 1
   for (let i = 0; i < repeatsArr.length; i++) {
       denominator = denominator * factorial(repeatsArr[i])
   }
   console.log('denominator', denominator)
   let count = Math.floor(nominator / denominator)
   console.log('count', count)
   console.log('zeros', numOfZeros)
   if (numOfZeros > 0) {
       // calculate how many permutations can be in the first digit without zero
      const firstNoZeroPerm = factorial(n-numOfZeros) / (factorial(n-1)) * factorial(numOfZeros)
      // calculate how many permutations we can have for the rest of digits, where zero is permitted
      const restPerm = nominator / ((factorial(n-(n-1)) * denominator))
      count = firstNoZeroPerm * restPerm / numOfZeros
   }
   return count
}

function factorial(n) {
   if (n === 1 || n === 0) return 1
   let result = n
   while (n > 1) {
       n--
       result = result * n
   }
   return result
}

// BRUTE FORCE GENERATINNG PERMUTATIONS AND ADDING THEM TO THE SET

function findPermutations(string) {
  const arr = string.split('')
  const buffer = new Array(arr.length)
  const isInBuffer = new Array(arr.length).fill(false)
  const permutations = new Set()
  findPermutationsHelper(arr, buffer, 0, isInBuffer, permutations)
  return permutations.size
}

function findPermutationsHelper(arr, buffer, bufferIndex, isInBuffer, result) {
  //base case
  if (bufferIndex === buffer.length) {
      const permutation = buffer.join('')
      if (!permutation.startsWith('0')) result.add(permutation)
      return
  }
  for (let i = 0; i < arr.length; i++) {
      if (!isInBuffer[i]) {
          buffer[bufferIndex] = arr[i]
          isInBuffer[i] = true
          findPermutationsHelper(arr, buffer, bufferIndex+1, isInBuffer, result)
          isInBuffer[i] = false
      }
  }
  return result
}



assert(test_cases, findSimilar)
