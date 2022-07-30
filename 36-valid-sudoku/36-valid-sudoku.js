/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const map = buildMap();
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === ".") continue;
      if (
        map[`row${r}`].has(board[r][c]) ||
        map[`col${c}`].has(board[r][c]) ||
        map[`box${Math.floor(r / 3) * 3 + Math.floor(c / 3)}`].has(board[r][c])
      )
        return false;
      map[`row${r}`].add(board[r][c]);
      map[`col${c}`].add(board[r][c]);
      map[`box${Math.floor(r / 3) * 3 + Math.floor(c / 3)}`].add(board[r][c]);
    }
  }
  return true;

  function buildMap() {
    const map = {};
    for (let i = 0; i < 9; i++) {
      map[`row${i}`] = new Set();
      map[`col${i}`] = new Set();
      map[`box${i}`] = new Set();
    }
    return map;
  }
};