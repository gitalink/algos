// given nominations find all ways to make target amount

// [1, 2, 5]
// can give [1,1,1,1,1], [1,1,1,2], [1,2,2], [5]


function coinChange(arr, target) {
  const result = []
  const buffer = []
  coinChangeHelper(arr, target, buffer, 0, result, 0)
  return result

}

function coinChangeHelper(arr, target, buffer, startIndex, result, currentSum) {
  // base cases
 //const currentSum = buffer.reduce((accum, val) => {return accum + val}, 0)
  console.log('buffer', buffer)
  console.log('sum', currentSum)
  result.push(buffer)

  if (currentSum > target) {
    return
  }

  if (currentSum === target) {
    console.log('found change')
    console.log('buffer', buffer)
    result.push(buffer)
    console.log('result', result)
    return
  }

  for (let i = startIndex; i < arr.length; i++) {
    buffer.push(arr[i])
    coinChangeHelper(arr, target, buffer, i, result, currentSum+arr[i])
    buffer.pop()
  }

}


console.log(coinChange([1,2,5], 5))
