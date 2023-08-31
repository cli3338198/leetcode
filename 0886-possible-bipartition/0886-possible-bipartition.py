class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        graph = {}
        for i in range(1, n+1):
            graph[i] = []
        for u, v in dislikes:
            graph[u].append(v)
            graph[v].append(u)
        colors = [0] * (n+1)
            
        def dfs(node: int, color: int) -> bool:
            nonlocal graph
            nonlocal colors
            if colors[node] != 0:
                return colors[node] == color
            colors[node] = color
            for next in graph.get(node, []):
                if not dfs(next, -color):
                    return False
            return True
        
        for i in range(1, n):
            if colors[i] == 0 and not dfs(i, 1):
                return False
        return True