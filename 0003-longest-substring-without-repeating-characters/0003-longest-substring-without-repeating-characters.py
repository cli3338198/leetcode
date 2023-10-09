class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = res = 0
        cnt = {}
        for right, char in enumerate(s):
            cnt[char]  = cnt.get(char, 0) + 1
            while cnt[char] > 1 and left < right:
                cnt[s[left]] -= 1
                left += 1
            res = max(res, right-left+1)
        return res