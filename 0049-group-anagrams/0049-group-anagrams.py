class Solution:
    def str_to_ana(self, word: str) -> str:
        return "".join(sorted([c for c in word]))
    
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mp = {}
        for st in strs:
            ana = self.str_to_ana(st)
            mp[ana] = [*mp.get(ana, []), st]
        return mp.values()