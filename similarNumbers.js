/*
you are given 2 strings representing numbers eg 1234 1342
you need to find out if they are similar (without leading zeros)
if so, return number of similar numbers to a
if not, return number of similar numbers to b

eg. 1100 and 1001

similar numbers 1100, 1001, 1010 answer is 3

1234 and 1342 simlar , #of similar numbers 4! = 4*3*2*1 = 24

1100234

*/
let n = 7
const repeats = [2, 2]
let numOfZeros = 2

const firstDigitPerms = factorial(n-1) * factorial(numOfZeros) / (factorial(n-1) * factorial(2) * factorial(numOfZeros))
console.log('FIRST PERMS', firstDigitPerms)

const restPerms = factorial (n) / (factorial(n-(n-1)) * factorial(2) * factorial(2))
console.log(restPerms)

const result = firstDigitPerms * restPerms
console.log(result)

function factorial (n) {
  if (n === 0 || n === 1) return 1
  let result = n
  while (n > 1) {
    n--
    result *= n
  }
  return result
}
