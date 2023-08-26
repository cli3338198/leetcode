class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        dr = [0, 1, 0, -1]
        dc = [1, 0, -1, 0]
        r = c = di = 0
        obstacles = set(map(tuple, obstacles))
        res = 0
        for cmd in commands:
            if cmd == -2:
                di = (di - 1) % 4
            elif cmd == -1:
                di = (di + 1) % 4
            else:
                for k in range(0, cmd):
                    if (r + dr[di], c + dc[di]) not in obstacles:
                        r += dr[di]
                        c += dc[di]
                        res = max(res, r * r + c * c)
        return res