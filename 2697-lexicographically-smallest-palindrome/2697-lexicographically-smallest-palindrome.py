class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        s = [*s]
        for i in range(0, len(s) // 2):
            if s[i] < s[-1-i]:
                s[-1-i] = s[i]
            else:
                s[i] = s[-1-i]
        return "".join(s)