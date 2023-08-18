class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        graph = {}
        for u, v in edges:
            if u not in graph:
                graph[u] = []
            if v not in graph:
                graph[v] = []
            graph[u].append(v)
            graph[v].append(u)
        
        def dfs(parent: int, root: int) -> int:
            nonlocal graph
            res = 0
            for next in graph.get(root, []):
                if next != parent:
                    res += dfs(root, next)
            if res > 0 or hasApple[root]:
                return res + 2
            return res
        
        return max(dfs(-1, 0)-2, 0)
            
        