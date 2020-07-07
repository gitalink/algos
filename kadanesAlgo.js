// find maximum contiguous subarray
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] => max subarray sum is 6 (indices 3 to 6, inclusively)

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSubArray(arr) {
  let localMax = 0
  let globalMax = -Infinity

  for (let i = 0; i < arr.length; i++) {
    localMax = Math.max(arr[i], arr[i] + localMax)
    if (localMax > globalMax) {
      globalMax = localMax
    }
  }
  return globalMax
}

console.log(maxSubArray(arr))
