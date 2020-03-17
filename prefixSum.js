//Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to a numberX

function prefixSum(arr, x) {
  if (!arr.length) {
    return null
  }
  let sum = arr[0];
  let hashMap = {[arr[0]]: 0}
  console.log('HASHMAP', hashMap)
  for (let i = 1; i < arr.length; i++) {
    console.log('HASHMAP', hashMap)
    console.log("I", i)
    console.log('SUM BEFORE', sum)
    sum = sum + arr[i]
    console.log('ARRAY AT I', arr[i], 'SUM AFTER', sum)
    if (sum === x) {
      console.log('IN IF SUM=X', "ARR SLICE", arr.slice(0, i+1))
      return arr.slice(0, i+1)
    }
    if (hashMap.hasOwnProperty(sum - x)) {
      return arr.slice(hashMap[sum-x]+1, i+1)
    }
    hashMap[sum] = i
  }
  return null
}




console.log(prefixSum([2,4,-2,1,-3,5,-3], 5))
// expected result  [2,4,-2,1]
