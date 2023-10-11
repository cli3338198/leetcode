class Solution:
    def dfs(self, board: List[List[str]], r: int, c: int, word: str, i: int) -> bool:
        if i == len(word):
            return True
        if r < 0 or r >= len(board) or c < 0 or c >= len(board[0]) or board[r][c] != word[i]:
            return False
        res = False
        temp = board[r][c]
        board[r][c] = ""
        for dr, dc in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
            res = res or self.dfs(board, r+dr, c+dc, word, i+1)
        board[r][c] = temp
        return res
    
    def exist(self, board: List[List[str]], word: str) -> bool:
        for r in range(0, len(board)):
            for c in range(0, len(board[0])):
                if board[r][c] == word[0]:
                    if self.dfs(board, r, c, word, 0):
                        return True
        return False