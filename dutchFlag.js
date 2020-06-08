// Given an array with n marbles colored Red, White or Blue, sort them so that marbles of the same color are adjacent, with the colors in the order Red, White and Blue.
// Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue).
// For example, if A = [1,0,1,2,1,0,1,2], Output = [0,0,1,1,1,1,2,2].

// Approach: Have 2 pointers - one for red boundary, one for blue boundary, iterate through the array and move reds into red PageTransitionEvent, blue into blue partition, leave white in the middle.

function dutchFlag(arr) {
  let redPointer = 0
  let bluePointer = arr.length-1
  let i = 0

  while (i <= bluePointer) {
    console.log('ARRAY', arr)
    console.log("RED", redPointer)
    console.log("BLUE", bluePointer)
    console.log("I", i)


    if (i=== redPointer && arr[i] === 0) {
      redPointer +=1
      i+=1
    }
    if (arr[bluePointer] === 2) bluePointer-=1

    if (arr[i] === 1) i+=1

    if (arr[i] === 0) {
      swap(redPointer, i, arr)
      i+=1
      redPointer +=1
    }
    else if (arr[i] === 2) {
      swap(bluePointer, i, arr)
      bluePointer-=1
    }

  }
  return arr
}

function swap(pointer, i, arr) {
  const temp = arr[pointer]
  arr[pointer] = arr[i]
  arr[i] = temp
}

console.log(dutchFlag([1,0,1,2,1,0,1,2]))
