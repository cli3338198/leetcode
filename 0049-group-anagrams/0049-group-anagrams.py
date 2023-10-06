class Solution:
    def str_to_ana(self, word: str) -> str:
        return "".join(sorted([c for c in word]))
    
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mp = defaultdict(list)
        for st in strs:
            mp["".join(sorted(st))].append(st)
        return mp.values()
        
        # 
        
        mp = {}
        for st in strs:
            ana = self.str_to_ana(st)
            mp[ana] = [*mp.get(ana, []), st]
        return mp.values()