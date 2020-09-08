const subsets = function(nums) {
  if (!nums || !nums.length) return []
  const buffer = new Array(nums.length)
  const result = []
  return helper(nums, buffer, 0, 0, result)
};

function helper(arr, buffer, startIndex, bufferIndex, result) {
  // save current buffer as a combination
  //result.push(buffer.slice(0, bufferIndex))
  // base cases
  result.push(buffer.slice(0, bufferIndex))
  if (bufferIndex === buffer.length) {
      return
  }
  if (startIndex === arr.length) return

  // recursive case

  for (let i = startIndex; i < arr.length; i++) {
      // place candidates into buffer index
      buffer[bufferIndex] = arr[i]
      // recurse into next buffer index
      helper(arr, buffer, i+1, bufferIndex+1, result)
  }
  return result
}

console.log(subsets([1,2,3]))
