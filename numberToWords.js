const numDict = {
  '0' : 'Zero',
  '1' : 'One',
  '2' : 'Two',
  '3' : 'Three',
  '4' : 'Four',
  '5' : 'Five',
  '6' : 'Six',
  '7' : 'Seven',
  '8' : 'Eight',
  '9' : 'Nine',
  '10' : 'Ten',
  '11' : 'Eleven',
  '12' : 'Twelve',
  '13' : 'Thirteen',
  '14' : 'Fourteen',
  '15' : 'Fifteen',
  '16' : 'Sixteen',
  '17' : 'Seventeen',
  '18' : 'Eighteen',
  '19' : 'Nineteen'
}

const tensDict = {
  '2' : 'Twenty',
  '3' : 'Thirty',
  '4' : 'Forty',
  '5' : 'Fifty',
  '6' : 'Sixty',
  '7' : 'Seventy',
  '8' : 'Eighty',
  '9' : 'Ninety'
}

const triplesIndexToWords = (num) => {
  switch (num) {
  case 2 :
      return 'Thousand'
      break
  case 3:
      return 'Million'
      break
  case 4:
      return 'Billion'
      break
  case 5:
      return 'Trillion'
      break
  default:
      return 'Thousands'
  }
}

var numberToWords = function(num) {

  if (num === 0) return 'Zero'

  const result = []
  const numTriplets = []
  const numString = num.toString()

  for (let i = numString.length; i > 0; i -= 3) {
      if (i <= 3) {
          numTriplets.unshift(numString.slice(0, i))
      }
      else {
          numTriplets.unshift(numString.slice(i-3, i))
      }
  }

  for (let i = 0; i < numTriplets.length; i++) {
      const placeVal = numTriplets.length - i
      const triplet = numTriplets[i]
      if (triplet === '000') continue
      if (placeVal > 1) {
          result.push(translate(triplet, numDict, tensDict))
          result.push(triplesIndexToWords(placeVal))
      }
      else {
          result.push(translate(triplet, numDict, tensDict))
      }
  }

  return result.join(' ')
};

// helper function to translate 3 digit words


function translate(numString, numDict, tensDict) {
  const result = []
  // const numString = num.toString()
  for (let i = 0; i< numString.length; i++) {
      const digitPlace = numString.length - i
      const digit = numString[i]
      if (digit !== '0' && digitPlace === 3 ) {
          result.push(numDict[digit])
          result.push('Hundred')
      }
      if (digitPlace === 2 && digit === '1') {
          result.push(numDict[numString.slice(i)])
          break
      }
      if (digitPlace === 2 && digit !== '1' && digit !== '0') {
          result.push(tensDict[digit])
      }
      if (digitPlace === 1 && digit !== '0') {
          result.push(numDict[digit])
      }
  }
  return result.join(' ')
}
