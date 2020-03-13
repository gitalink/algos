// given an array of integers and Target sum, find if any of the two integers sum up to the Target sum
// return the pair of integers
// if nothing sums up return null
// if more than one pair exists, return any one of them

//For e.g, if A = [6,3,5,2,1,7]. Target = 4, Result= [3,1]

// brute force using 2 nested loops, runs in O(n^2) time, O(1) space

// function twoSum (arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
//   return null
// }

// using hashMap - runs in O(n) time, uses O(n) space

// function twoSum (arr, target) {
//   const hashMap = {}
//   for (let i=0; i<arr.length; i++) {
//     if (hashMap.hasOwnProperty(arr[i])) {
//       return [arr[i], hashMap[arr[i]]]
//     }
//     else {
//       const sumPiece = target - arr[i]
//       hashMap[sumPiece] = arr[i]
//     }
//   }
//   return null
// }

// using sorting,runs in O(nlogn) time, O(1) space
// sort array first then use two pointers at the beginning and at the end of array,
// if sum is less move left pointer, if sum is more, move right pointer

function twoSum (arr, target) {
  arr.sort()
  let leftIdx = 0
  let rightIdx = arr.length-1
  while (leftIdx < rightIdx) {
    let sum = arr[leftIdx] + arr[rightIdx]
    if (sum === target) {
      return [arr[leftIdx], arr[rightIdx]]
    }
    else if (sum > target) {
      rightIdx -=1
    }
    else if (sum < target) {
      leftIdx +=1
    }
  }
  return null
}

console.log(twoSum([6,3,5,2,1,7], 4))
