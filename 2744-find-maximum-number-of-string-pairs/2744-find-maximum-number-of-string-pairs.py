class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        mp, res = {}, 0
        for word in words:
            if word[::-1] in mp:
                res += mp[word[::-1]]
            mp[word] = mp.get(word, 0) + 1
        return res
            