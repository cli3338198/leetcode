class Solution:
    def minWindow(self, s: str, t: str) -> str:
        mp = {}
        for c in t:
            if c not in mp:
                mp[c] = 0
            mp[c] += 1
        
        lo, hi, start, length, count = 0, 0, 0, inf, len(t)
        
        while hi < len(s):
            if s[hi] in mp:
                if mp[s[hi]] > 0:
                    count -= 1
                mp[s[hi]] -= 1
                
            hi += 1
            
            while lo < hi and count == 0:
                if hi - lo < length:
                    length = hi - lo
                    start = lo
                
                if s[lo] in mp:
                    mp[s[lo]] += 1
                
                    if mp[s[lo]] > 0:
                        count += 1
                
                lo += 1
            
        return s[start:start+length:] if length != inf else ""