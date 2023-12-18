class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def backtrack(r: int, c: int, i: int) -> bool:
            if i == len(word):
                return True
            if r < 0 or r >= len(board) or c < 0 or c >= len(board[r]) or board[r][c] != word[i]:
                return False
            temp = board[r][c]
            board[r][c] = ""
            for r1, c1 in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
                r2, c2 = r + r1, c + c1
                if backtrack(r2, c2, i+1):
                    return True
            board[r][c] = temp
            return False
        
        for r in range(0, len(board)):
            for c in range(0, len(board[r])):
                if backtrack(r, c, 0):
                    return True
        return False
