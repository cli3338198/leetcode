class Solution:
    def firstUniqChar(self, s: str) -> int:
        # abc = [-100] * 26
        # for i, c in enumerate(s):
        #     if abc[ord(c)-97] == -100:
        #         abc[ord(c)-97] = i
        #     else:
        #         abc[ord(c)-97] = -1
        # for c in s:
        #     if abc[ord(c)-97] >= 0:
        #         return abc[ord(c)-97]
        # return -1
        
        chars = Counter(list(s))
        singles = [c for c, v in chars.items() if v == 1]
        if not singles:
            return -1
        for i, c in enumerate(s):
            if c in singles:
                return i
            