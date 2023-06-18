class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        mp = [0] * 26
        for i, c in enumerate(order):
            mp[ord(c)-97] = i
        for i in range(0, len(words)-1):
            a, b = words[i], words[i+1]
            for j in range(0, len(a)):
                if j == len(b):
                    return False
                if a[j] != b[j]:
                    if mp[ord(a[j])-97] > mp[ord(b[j])-97]:
                        return False
                    else:
                        break
        return True