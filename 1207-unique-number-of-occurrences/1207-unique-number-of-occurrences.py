class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        mp = {}
        for c in arr:
            mp[c] = mp.get(c, 1) + 1
        return len(set([mp[c] for c in mp])) == len(mp)
        