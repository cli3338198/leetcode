class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        mp, res = {}, []
        for word in s1.split(" "):
            mp[word] = mp.get(word, 0) + 1
        for word in s2.split(" "):
            mp[word] = mp.get(word, 0) + 1
        for word, cnt in mp.items():
            if cnt == 1:
                res.append(word)
        return res