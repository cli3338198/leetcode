class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        mp = {}
        for c in s:
            mp[c] = mp.get(c, 0) + 1
        cnt = None
        for k in mp:
            if not cnt:
                cnt = mp[k]
            elif mp[k] != cnt:
                return False
        return True
            