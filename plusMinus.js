// find if adding + or - between the numbers get the the sum to 0
// return a string of +- signs eg .'++---'
// if there are multiple ways return the one with more '-' signs
// eg. plusMinus(35132) returns '-++-'
// plusMinus(26712) return -+-- and not +-+-.

// Approach:
// separate into array of digits
// backtrack through the array splitting into 2 recuursive functions one with + and one with -
// keep track of the sum
// once the array is empty and the sum is zero return the string

function plusMinus(num) {
  const numsArr = num.toString().split('').map((el) => {return Number(el)})
  const strings = []
  const sum = numsArr[0]
  plusMinusHelper(numsArr, 1, sum, '+', '', strings)
  plusMinusHelper(numsArr, 1, sum, '-', '', strings)
  return strings.length ? moreMinus(strings) : 'not possible'
}

function plusMinusHelper(arr, index, sum = arr[1], sign, signs = '', strings) {
  signs += sign
  if (sign === '+') {
    sum += arr[index]
  }
  else if (sign === '-') {
    sum -= arr[index]
  }

  if (index === arr.length-1 && sum === 0) {
    strings.push(signs)
    return true
  }
  if (index === arr.length-1 && sum !== 0) {
    return false
  }
  plusMinusHelper(arr, index+1, sum, '+', signs, strings)
  plusMinusHelper(arr, index+1, sum, '-', signs, strings)

  return false
}

function moreMinus(arr) {
  let maxMinus = 0
  let maxIndex = -1
  for (let i = 0; i< arr.length; i ++) {
    const count = countMinus(arr[i])
    if (count > maxMinus) {
      maxMinus = count
      maxIndex = i
    }
  }
  return arr[maxIndex]
}

function countMinus(string) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '-') {
      count +=1
    }
  }
  return count
}

console.log(plusMinus(35132))
console.log(plusMinus(26712))
console.log(plusMinus(199))

