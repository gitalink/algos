
  const board = [
    ['c', 'o', 'm'],
    ['r', 'p', 'l'],
    ['c', 'i', 't'],
    ['o', 'a', 'e'],
    ['f', 'o', 'd'],
    ['z', 'r', 'b'],
    ['g', 'i', 'a'],
    ['o', 'a', 'g'],
    ['f', 's', 'z'],
    ['t', 'e', 'i'],
    ['t', 'w', 'd'],
  ];

function findWord(board, word) {
//	let wordFound = false
	const height = board.length
	for (let h = 0; h < height; h++) {
    const width = board[h].length
		for (let w = 0; w < width; w++) {
			if (board[h][w] === word[0]) {
        const visited = board.map(row => row.map(cell => false))
				if (lookAround(h, w, board, visited, word, 0)) return true
			}
		}
	}
	return false
}

function lookAround(h, w, board, visited, word, idx) {
  //base cases
  console.log('H', h, "W", w, board, visited, word, 'IDX', idx, 'CHAR', word[idx])
	if (idx > word.length-1) {
    return false
  }
	if (visited[h][w] === true) return false
	if (idx <= word.length-1 && board[h][w] !== word[idx]) return false
	if (idx === word.length-1 && board[h][w] === word[idx]) {
    console.log("WORD Found")
    return true
  }

	// recursive case

	if (idx < word.length-1 && board[h][w] === word[idx]) {
		visited[h][w] = true
    const coords = getNeighbors(h, w, board)
    console.log('NEIGHBORS', coords)
		for (const coord of coords) {
			if (lookAround(coord[0], coord[1], board, visited, word, idx+1)) {
				return true
			}
    }
    visited[h][w]=false
		return false
	}
}

function getNeighbors(h, w, board) {
	const neighbors = []
	//go right
	if (w < board[h].length-1) neighbors.push([h, w+1])
	// go right-down
	if (h < board.length-1 && w < board[h].length-1) neighbors.push([h+1, w+1])
	// go down
	if (h < board.length-1) neighbors.push([h+1, w])
	// go left-down
	if (h < board.length-1 && w > 0) neighbors.push([h+1, w-1])
	// go left
	if (w > 0) neighbors.push([h, w-1])
	// go left up
	if (h>0 && w >0) neighbors.push([h-1, w-1])
	// go up
	if (h > 0) neighbors.push([h-1, w])
	// go right up
	if (h > 0 && w < board[h].length-1) neighbors.push([h-1, w+1])
	return neighbors
}

console.log(findWord(board, 'foobar'))
