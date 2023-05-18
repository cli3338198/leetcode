class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        res = 0
        for word in words:
            for i in range(0, len(word)):
                if i >= len(pref) or word[i] != pref[i]:
                    break
                if i == len(pref)-1:
                    res += 1
        return res