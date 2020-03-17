function binarySearch(arr, target) {
  if (arr.length < 1 || arr === null) {
    return -1
  }

  let start = 0
  let end = arr.length-1

  while (start <= end) {
    let mid = Math.floor(start + (end-start)/2)
    if (target < arr[mid]) {
      end = mid-1
    }
    else if (target > arr[mid]) {
      start = mid +1
    }
    else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([-3, -1, 0, 2, 4, 5, 19, 300, 303, 50000, 59990, 108765], 303))
