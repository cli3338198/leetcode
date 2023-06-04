class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        broken = set([*brokenLetters])
        res = 0
        for word in text.split():
            flag = False
            for c in word:
                if c in broken:
                    flag = True
                    break
            if flag == False:
                res += 1
        return res