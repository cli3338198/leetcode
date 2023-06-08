class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        mp, res = {}, 0
        for w in words1:
            mp[w] = mp.get(w, 0) + 1
        for w in words2:
            if w in mp and mp[w] < 2:
                mp[w] -= 1
        for key in mp:
            if mp[key] == 0:
                res += 1
        return res
            