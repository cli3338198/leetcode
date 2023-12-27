class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        res, score, l, r = 0, 0, 0, len(tokens)-1
        while l <= r:
            if power >= tokens[l]:
                power -= tokens[l]
                l += 1
                score += 1
                res = max(res, score)
            elif power < tokens[l] and score > 0:
                power += tokens[r]
                r -= 1
                score -= 1
            else:
                return res
        return res