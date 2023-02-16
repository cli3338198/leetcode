class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        
        graph = {}
        
        for i in range(n):
            graph[i] = []
        
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
            
        def dfs(src: int, dst: int, visiting: set) -> bool:
            if src == dst:
                return True
            
            if src in visiting:
                return False
            
            visiting.add(src)
            
            for next in graph[src]:
                if dfs(next, dst, visiting):
                    return True
            
            return False
        
        return dfs(source, destination, set())