

/*
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011


*/
// We could travesre via BFT of DFT
// BFT - gives shortest path right away
// track of distance on the node level

function shortestCellPath(grid, sr, sc, tr, tc) {
	/**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/
  const nr = grid.length
  const nc = grid[0].length
  const queue = []

  grid[sr][sc] = -1

  queue.push({coords: [sr, sc], distance: 0})


  while (queue.length) {
         let current = queue.shift()
         let cr = current.coords[0]
         let cc = current.coords[1]
         let distance = current.distance

         let directions = [[cr, cc+1], [cr+1, cc], [cr, cc-1], [cr-1, cc]]

         for (const dir of directions) {
           const r = dir[0]
           const c = dir[1]

           if (r === tr && c === tc) {
           return distance + 1
           }

           if (isInBounds(r, c, nr, nc) && grid[r][c] === 1) {
             const newDistance = distance + 1

             grid[r][c] = -1
             queue.push({coords: [r, c], distance: newDistance})
           }
         }
       }

  return -1
}

function isInBounds (r, c, nr, nc) {
  if (r >=0 && r < nr && c >= 0 && c < nc ) return true
  else return false
}
