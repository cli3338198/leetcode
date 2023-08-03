class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        graph = {}
        for u, v, d in roads:
            if u not in graph:
                graph[u] = []
            if v not in graph:
                graph[v] = []
            graph[u].append([v, d])
            graph[v].append([u, d])
        
        def dfs(n: int, seen: set) -> int:
            nonlocal graph
            seen.add(n)
            res = float("inf")
            for next, d in graph[n]:
                res = min(res, d)
                if next not in seen:
                    res = min(res, dfs(next, seen))
            return res
        
        return dfs(1, set())