function findInsertIndex(arr, target) {
  if (arr.length === 0 || arr[0] > target) return 0
  if (arr[arr.length-1] < target) return arr.length
  if (arr === null) return -1

  let start = 0
  let end = arr.length-1

  while(start <= end) {
    let mid = Math.floor(start + (end-start)/2)
    if (target < arr[mid] || (arr[mid] === target && mid >0 && arr[mid-1] === arr[mid])) {
      end = mid -1
    }
    if (target > arr[mid]) {
      start = mid+1
    }
    else {
      return mid
    }
  }
  if (target < arr[start] && target > arr[end]) {
    return start
  }
}

console.log(findInsertIndex([1,2,4,5,6,8], 3)) // return 2
console.log(findInsertIndex([1,2,4,5,6,8], 0)) // return 0
console.log(findInsertIndex([1,2,4,5,6,8], 4)) // return 3
