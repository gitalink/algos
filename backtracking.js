// given 2D array, where 0 is path and 1 is wall, find if a path exists
// from given coordinates to the end of the array

const array1 = [
  [0,1,1,1],
  [0,0,0,1],
  [1,0,0,1],
  [1,1,0,0]
]

const memo1 = array1.map(row=>row.map(cell=>'unvisited'))

function pathExists(array, i, j, memo) {
  if (array.length === 1) return true
  console.log('ARRAY', array, 'I', i, 'J', j)
  console.log('MEMO', memo)
  if (array[i][j] === 1) return false
  if (memo[i][j] === 'visiting') return false
  if (i === array.length-1 && j === array[array.length-1].length-1) return true

  memo[i][j] = 'visiting'
  directions = getDirections(array, i, j)
  console.log('DIRECTIONS', directions)
  for (const dir of directions) {
    if (pathExists(array, dir[0], dir[1], memo)) return true
  //  else memo[i][j] = 'path_not_found'
  }
  memo[i][j] = 'path_not_found'
  return false
}

function getDirections(board, h, w) {
const neighbors = []
//go right
if (w < board[h].length-1) neighbors.push([h, w+1])
// go down
if (h < board.length-1) neighbors.push([h+1, w])
// go left
if (w > 0) neighbors.push([h, w-1])
// go up
if (h > 0) neighbors.push([h-1, w])

return neighbors

}

console.log(pathExists(array1, 0, 0, memo1))
