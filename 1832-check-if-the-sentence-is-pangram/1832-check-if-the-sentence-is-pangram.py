class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        chars = [0] * 26
        for c in sentence:
            chars[ord(c)-97] = 1
        return sum(chars) == 26