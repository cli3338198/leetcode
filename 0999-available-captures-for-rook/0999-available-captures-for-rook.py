class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        pr, pc, res = None, None, 0
        for r in range(0, len(board)):
            for c in range(0, len(board[r])):
                if board[r][c] == "R":
                    pr = r
                    pc = c
                    break
        for r, c in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
            for i in range(0, len(board)):
                rr = pr + (r * i)
                cc = pc + (c * i)
                if rr < 0 or cc < 0 or rr >= len(board) or cc >= len(board[rr]) or board[rr][cc] == "B":
                    break
                if board[rr][cc] == "p":
                    res += 1
                    break
        return res