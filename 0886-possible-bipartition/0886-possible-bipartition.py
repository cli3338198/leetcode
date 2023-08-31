class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        parent = {}
        
        def insert(n: int) -> None:
            nonlocal parent
            if n not in parent:
                parent[n] = n
        
        def find(n: int) -> int:
            nonlocal parent
            if parent[n] != n:
                parent[n] = find(parent[n])
            return parent[n]
        
        def union(a: int, b: int) -> bool:
            nonlocal parent
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[rb] = ra
        
        graph = {}
        for i in range(1, n+1):
            graph[i] = []
            parent[i] = i
        for u, v in dislikes:
            graph[u].append(v)
            graph[v].append(u)
        for i in range(1, n+1):
            if i not in graph:
                continue
            for j in graph.get(i, []):
                if find(i) == find(j):
                    return False
                union(graph[i][0], j)
        return True            
        
        #
        
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