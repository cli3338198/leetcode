class Solution:
    def judgeCircle(self, moves: str) -> bool:
        if moves.count("U") == moves.count("D") and moves.count("L") == moves.count("R"):
            return True
        return False
        
        mp = {"R": [0, 1], "L": [0, -1], "U": [1, 0], "D": [-1, 0]}
        curY = curX = 0
        for move in moves:
            y, x = mp[move]
            curY += y
            curX += x
        return curY == 0 and curX == 0