class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        
        map = {}
        
        for u, v in edges:
            if map.get(u):
                return u
            
            if map.get(v):
                return v
            
            map[u] = True
            map[v] = True