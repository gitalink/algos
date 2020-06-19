// find if intervals overlap
// use line sweep technique

const intervals = [[5,7], [1,3], [6,9]]

function findOverlap(arr) {
  let overlaps = 0
  let maxOverlaps = 0

  const points = [] // create a new line of points [point, isStart]

  arr.forEach(interval => {
    points.push([interval[0],true])
    points.push([interval[1],false])
  })
  console.log(points)

  points.sort((a,b) => {return a[0]-b[0]})

  console.log(points)

  for (let i=0; i < points.length; i++) {
    let point = points[i]
    if (point[1] === true) {
      overlaps+=1
    }
    if (point[1] === false) {
      overlaps -=1
    }
    if (overlaps > 1) {
      maxOverlaps = Math.max(maxOverlaps, overlaps)
    }
  }
  return maxOverlaps
}

console.log(findOverlap(intervals))
