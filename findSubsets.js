function findSubsets(arr) {
  if (!arr.length) return arr
  const buffer = new Array(arr.length)
  const result = []
  findCombos(arr, buffer, 0, 0, result)
  return result
}

function findCombos (arr, buffer, startIndex, bufferIndex, result) {
  result.push(buffer.slice(0, bufferIndex))
  // termination case
  if (startIndex === arr.length || bufferIndex === arr.length) {
    return
  }

  // find candidates into buffer
  for (let i = startIndex; i < arr.length; i++) {
    buffer[bufferIndex] = arr[i]
    findCombos(arr, buffer, i+1, bufferIndex+1, result)
  }
}

console.log(findSubsets([3, 2, 4]))
