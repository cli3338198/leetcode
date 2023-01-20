class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        
        board = [["."] * n for _ in range(n)]
        res = []
        
        def clone(board: List[List[int]]) -> List[List[int]]:
            
            b = []
            
            for r in range(n):
                row = []
                for c in range(n):
                    row.append(board[r][c])
                    
                b.append("".join(row))
            
            return b
        
        def is_valid(r: int, c: int, set_: set) -> bool:
            
            if f"r{r}" in set_: return False
            if f"c{c}" in set_: return False
            if f"+{r+c}" in set_: return False
            if f"-{r-c}" in set_: return False
            
            return True
            
        
        def helper(r: int, set_: set):
            if r == n:
                res.append(clone(board))
                return
            
            for c in range(n):
                if is_valid(r, c, set_):
                    set_.add(f"r{r}")
                    set_.add(f"c{c}")
                    set_.add(f"+{r+c}")
                    set_.add(f"-{r-c}")
                    board[r][c] = "Q"
                    helper(r+1, set_)
                    board[r][c] = '.'
                    set_.discard(f"r{r}")
                    set_.discard(f"c{c}")
                    set_.discard(f"+{r+c}")
                    set_.discard(f"-{r-c}")          
            
        helper(0, set())
        return res
        