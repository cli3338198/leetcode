class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 1:
            return strs[0]
        length, res = len(strs[0]), ""
        for i in range(1, len(strs)):
            cur_length = 0
            for j in range(0, min(len(strs[0]), len(strs[i]))):
                if strs[0][j] != strs[i][j]:
                    break
                else:
                    cur_length += 1
            if cur_length <= length:
                length = cur_length
                res = strs[0][0:cur_length:]
        return res
        
        #
        
        strs.sort()
        res, i = "", 0
        while i < min(len(strs[0]), len(strs[-1])) and strs[0][i] == strs[-1][i]:
            res += strs[0][i]
            i += 1
        return res