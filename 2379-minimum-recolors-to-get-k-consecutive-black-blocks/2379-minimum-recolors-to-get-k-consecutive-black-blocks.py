class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        res, w, b, l = float("inf"), 0, 0, 0
        for r in range(0, len(blocks)):
            if blocks[r] == "W":
                w += 1
            else:
                b += 1
            if r - l + 1 == k:
                res = min(res, w)
                if blocks[l] == "W":
                    w -= 1
                else:
                    b -= 1
                l += 1
        return res