const exist = (board, word) => {

  if (board === null || !board.length || !word.length) return false

  const memo = board.map(row => {return row.map(el => {return 'unvisited'})})
  const result = ''
  for (let i = 0; i < board.length; i ++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === word[0]) {
               if (existHelper(board, word, 0, i, j, memo)) {
                  return true
              }
          }
      }
  }
 return false
}

function existHelper(board, word, charIndex, i, j, memo) {

  if (isOutOfBound(i, j, board) || board[i][j] !== word[charIndex]) return false

  if (charIndex === word.length-1 && board[i][j] === word[charIndex]) {
         return true
     }

  if (board[i][j] === word[charIndex]) {
      memo[i][j] = 'visited'
      const coords = [[i, j+1], [i+1, j], [i, j-1], [i-1, j]]
      for (coord of coords) {
         if (isOutOfBound(coord[0], coord[1], memo) || memo[coord[0]][coord[1]] === 'visited') {
             continue;
         }
        if (existHelper(board, word, charIndex+1, coord[0], coord[1], memo)) {
             return true
          }
      }
       memo[i][j] = 'unvisited'
  }
  return false
}


function isOutOfBound(i, j, board) {
  if (i < 0 || i > board.length-1 || j < 0 || j > board[i].length-1) {
      return true
  }
  else return false
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"ABCCED")) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"SEE")) // true

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 "ABCB")) // false

console.log(exist([["a","a","a"],["a","b","b"],["a","b","b"],["b","b","b"],["b","b","b"],["a","a","a"],["b","b","b"],["a","b","b"],["a","a","b"],["a","b","a"]],
"aabaaaabbb")) // false
