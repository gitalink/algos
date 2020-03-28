function binarySearch(arr, target) {
  if (arr.length < 1 || arr === null) {
    return -1
  }

  let start = 0
  let end = arr.length-1

  while (start <= end) {
    let mid = Math.floor(start + (end-start)/2)
    // this additional logic makes sure that we return index of the first occurence of target in the array in case there are duplicates
    if (target < arr[mid] || (target === arr[mid] && mid > 0 && arr[mid-1] === arr[mid])) {
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

console.log(binarySearch([-3, -1, 0, 2, 4, 5, 6, 10, 19, 300, 303, 303, 303, 50000, 59990, 108765], 303))
