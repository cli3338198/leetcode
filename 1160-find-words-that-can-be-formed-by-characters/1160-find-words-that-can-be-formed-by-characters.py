class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        cnt, res = [0] * 26, 0
        for c in chars:
            cnt[ord(c)-97] += 1
        for word in words:
            copy, flag = [*cnt], True
            for c in word:
                if copy[ord(c)-97] == 0:
                    flag = False
                    break
                copy[ord(c)-97] -= 1
            if flag == True:
                res += len(word)
        return res