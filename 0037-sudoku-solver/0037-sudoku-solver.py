class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        rows, cols, squares = [[False] * 9 for _ in range(0, 9)], [[False] * 9 for _ in range(0, 9)], [[False] * 9 for _ in range(0, 9)]
        for r in range(0, 9):
            for c in range(0, 9):
                if board[r][c] != ".":
                    n = int(board[r][c])
                    rows[r][n-1] = True
                    cols[c][n-1] = True
                    squares[(r//3)*3 + c//3][n-1] = True
        
        def backtrack() -> bool:
            for r in range(0, 9):
                for c in range(0, 9):
                    if board[r][c] == ".":
                        for n in range(1, 10):
                            if rows[r][int(n-1)] == False and cols[c][int(n-1)] == False and squares[(r//3)*3 + c//3][n-1] == False:
                                rows[r][n-1] = True
                                cols[c][n-1] = True
                                squares[(r//3)*3 + c//3][n-1] = True
                                board[r][c] = str(n)
                                if backtrack():
                                    return True
                                rows[r][n-1] = False
                                cols[c][n-1] = False
                                squares[(r//3)*3 + c//3][n-1] = False
                                board[r][c] = "."
                        return False
            return True
        
        backtrack()
