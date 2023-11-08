export const findLessCostPath = (board: number[][]): number => {
  const costPath = [board[0][0]];

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      const nextColumn = board[i][j + 1]
      const nextLine = board[i + 1] ? board[i + 1][j] : 10000;

      if(nextLine < nextColumn) {
        costPath.push(nextLine)
      } else {
        costPath.push(nextColumn)
      }

    }
  }
  
  const total = 0;
  costPath.forEach(n => total + n)
  return total;
};
