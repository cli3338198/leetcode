class Solution:
    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:
        mp, res = {"L": [0, -1], "R": [0, 1], "U": [-1, 0], "D": [1, 0]}, []
        for i in range(0, len(s)):
            cur_r, cur_c = startPos
            moves = 0
            for j in range(i, len(s)):
                r, c = mp[s[j]]
                cur_r += r
                cur_c += c
                if cur_r < 0 or cur_r >= n or cur_c < 0 or cur_c >= n:
                    break
                moves += 1
            res.append(moves)
        return res
        