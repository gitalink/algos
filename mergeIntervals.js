// LINE SWEEP
// - loop though int
// - ctreate an array of points time: start, then sort
// - then loop throghu it and keep counter : +1 if start -1 if end
// - when counter === 1, capture mergedStart, when counter === 0, capture merge mergeEnd

// function merge (intervals) {
//     if (!intervals || !intervals.length) return []
//     const points = []
//     const result = []

//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i]
//         points.push([interval[0], true])
//         points.push([interval[1], false])
//     }
//     points.sort((a, b) => {
//         if (a[0] === b[0]) {
//             if (a[1] === b[1]) return 0
//             else if (a[1] && !b[1]) return -1
//             else return 1
//         }
//         else return (a[0] - b[0])
//     })

//     let count = 0
//     let mergedStart = 0
//     let mergedEnd = 0

//     for (let i = 0 ; i < points.length; i++) {
//         if (points[i][1]) {
//             count += 1
//             if (count === 1) {
//                 mergeStart = points[i][0]
//             }
//         }
//         if (!points[i][1]) {
//             count -= 1
//             if (count === 0) {
//                 mergeEnd = points[i][0]
//                 result.push([mergeStart, mergeEnd])
//             }
//         }

//     }

//     return result
// }



//SORT AND MERGE END - NO EXTRA SPACE

function  merge (intervals) {
  if (!intervals || !intervals.length) return []
  intervals.sort((a,b) => {return a[0]-b[0]})
  const result = []
  result.push(intervals[0])
  let i = 1
  while (i < intervals.length) {
      if (overlaps(result[result.length-1], intervals[i])) {
          result[result.length-1][1] = Math.max(result[result.length-1][1], intervals[i][1])
      }
      else {
          result.push(intervals[i])
      }
      i++
  }
  return result

};

function overlaps(arr1, arr2) {
  if (arr1[1] >= arr2[0]) {
      return true
  }
}

console.log(merge([[1,4],[0,2],[3,5]])) // [[0,5]]
console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])) // [[1,5]]

