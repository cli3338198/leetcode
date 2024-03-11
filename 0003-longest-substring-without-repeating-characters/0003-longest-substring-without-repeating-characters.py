class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        freq, left, res = {}, 0, 0
        for right, char in enumerate(s):
            freq[char] = freq.get(char, 0) + 1
            while left < right and freq[char] > 1:
                freq[s[left]] -= 1
                left += 1
            res = max(res, right - left + 1)
        return res
        