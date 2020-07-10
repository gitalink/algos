function getNumberOfIslands(binaryMatrix) {
  // your code goes here
  const visited = binaryMatrix.map(row => {return row.map(cell => {
    return false
  })})
  let count = 0

  for (let i = 0; i < binaryMatrix.length; i++) {
    let row = binaryMatrix[i]
    for (let j = 0; j < row.length; j++) {
      let cell = binaryMatrix[i][j]
      if (cell === 1 && visited[i][j] === false) {
        markIsland(binaryMatrix, i, j, visited)
        //islandsHelper(binaryMatrix, i, j, visited)
        count++
      }
    }
  }
  return count
}

// iterative Breath First Search Traversal based solution
function markIsland(matrix, i, j, visited) {
  const queue = []
  queue.unshift([i,j])

  while (queue.length) {
    console.log(queue)
    const coord = queue.pop()
    let x = coord[0]
    let y = coord[1]
    if (matrix[x][y] === 1 && visited[x][y] === false) {
      visited[x][y] = true
      const directions = [[x-1,y], [x, y+1], [x+1, y], [x, y-1]]
      for (const direction of directions) {
        if (isIn(direction[0], direction[1], matrix)) {
          queue.unshift(direction)
        }
      }
    }
  }
}

// recursive solution
function islandsHelper(matrix, i, j, visited) {
  if (!isIn(i, j, matrix)) {
    return
  }
  if (matrix[i][j] === 0) {
    return
  }
  if (matrix[i][j] === 1 && visited[i][j] === true) {
    return
  }
  if (matrix[i][j] === 1 && visited[i][j] === false) {
    visited[i][j] = true
    const directions = [[i-1,j], [i, j+1], [i+1, j], [i, j-1]]
    for (const direction of directions) {
       let r = direction[0]
       let c = direction[1]
       islandsHelper(matrix, r, c, visited)
    }
  }
  return
}

function isIn(i, j, matrix) {
  if (i < 0 || i >= matrix.length) {
    return false
  }
  else if (j < 0 || j >= matrix[i].length) {
    return false
  }
  else {
    return true
  }
}
