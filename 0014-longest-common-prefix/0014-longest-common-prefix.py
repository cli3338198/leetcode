class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()
        res, i = "", 0
        while i < min(len(strs[0]), len(strs[-1])) and strs[0][i] == strs[-1][i]:
            res += strs[0][i]
            i += 1
        return res