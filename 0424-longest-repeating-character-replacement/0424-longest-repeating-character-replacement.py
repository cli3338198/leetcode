class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = max_freq = res = 0
        freq = {}
        for right in range(0, len(s)):
            freq[s[right]] = freq.get(s[right], 0) + 1
            max_freq = max(max_freq, freq[s[right]])
            if not right-left-max_freq+1 <= k:
                freq[s[left]] -= 1
                left += 1
            res = right-left+1
        return res