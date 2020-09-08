const combos = function(nums, x) {
  if (!nums || !nums.length || x > nums.length) return []
  const buffer = new Array(x)
  const result = []
  return helper(nums, buffer, 0, 0, result)
};

function helper(arr, buffer, startIndex, bufferIndex, result) {
  // save current buffer as a combination
  //result.push(buffer.slice(0, bufferIndex))
  // base cases
  if (bufferIndex === buffer.length) {
      //result.push(buffer)
      const combo = [...buffer]
      result.push(combo)
      return
  }
  if (startIndex === arr.length) {

    return
  }

  // recursive case

  for (let i = startIndex; i < arr.length; i++) {
      // place candidates into buffer index
      buffer[bufferIndex] = arr[i]
      // recurse into next buffer index
      helper(arr, buffer, i+1, bufferIndex + 1, result)
  }
  return result
}

console.log(combos([1,2,3], 2))
