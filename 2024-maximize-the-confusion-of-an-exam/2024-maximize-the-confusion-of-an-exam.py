class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        mp, res, i = {}, 0, 0
        for j, l in enumerate(answerKey):
            mp[l] = mp.get(l, 0) + 1
            while min(mp.get("T", 0), mp.get("F", 0)) > k:
                mp[answerKey[i]] -= 1
                i += 1
            res = max(res, j - i + 1)
        return res