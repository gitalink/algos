
function perms (arr, x) {
  const buffer = new Array(x)
  const inBuffer = new Array(arr.length)
  const result = []
  return helper(arr, buffer, 0, inBuffer, result)
}


function helper (arr, buffer, bufferIndex, inBuffer, result) {
  // base case
  if (bufferIndex === buffer.length) {
    const perm = [...buffer]
    result.push(perm)
    return
  }

  for (let i = 0; i < arr.length; i++) {
    if (!inBuffer[i]) {
      buffer[bufferIndex] = arr[i]
      inBuffer[i] = true
      helper(arr, buffer, bufferIndex+1, inBuffer, result)
      inBuffer[i] = false
    }
  }
  return result
}

console.log(perms([1,2,3,4], 2))
