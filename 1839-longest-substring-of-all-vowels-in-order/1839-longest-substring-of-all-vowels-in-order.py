class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        res = 0
        for i, c in enumerate(word):
            if i > 0 and word[i] == word[i-1] == 'a':
                continue
            if c == 'a':
                j, cnt, last = i, 1, 'a'
                while j < len(word) and word[j] >= last:
                    if word[j] != last:
                        cnt += 1
                    last = word[j]
                    j += 1
                if cnt == 5:
                    res = max(res, j - i)
        return res