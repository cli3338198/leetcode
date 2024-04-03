class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        mp, res = {}, []
        for c in "qwertyuiop":
            mp[c] = 0
        for c in "asdfghjkl":
            mp[c] = 1
        for c in "zxcvbnm":
            mp[c] = 2
        for word in words:
            is_same_row = True
            for i in range(1, len(word)):
                if mp[word[i].lower()] != mp[word[0].lower()]:
                    is_same_row = False
                    break
            if is_same_row:
                res.append(word)
        return res