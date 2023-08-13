class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        res = vowels = i = 0
        for j in range(0, len(s)):
            if s[j] in "aeiou":
                vowels += 1
            if j - i + 1 == k:
                res = max(res, vowels)
                if s[i] in "aeiou":
                    vowels -= 1
                i += 1
        return res