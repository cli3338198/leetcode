class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        chars = [0] * 26
        for c in word1:
            chars[ord(c)-97] += 1
        for c in word2:
            chars[ord(c)-97] -= 1
        return max(map(lambda x: abs(x), chars)) <= 3
        
        chars = [0] * 26
        for c in word1:
            chars[ord(c)-97] += 1
        for c in word2:
            chars[ord(c)-97] -= 1
        return sum([1 for cnt in chars if abs(cnt) <= 3]) == 26