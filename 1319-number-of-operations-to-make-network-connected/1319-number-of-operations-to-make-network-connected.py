class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        if len(connections) < n-1:
            return -1
        graph = {}
        for u, v in connections:
            graph[u] = [*graph.get(u, []), v]
            graph[v] = [*graph.get(v, []), u]
        
        def dfs(node: int, visited: List[bool]) -> None:
            if visited[node] != True:
                visited[node] = True
                for next in graph.get(node, []):
                    dfs(next, visited)
        
        number_connected, visited = 0, [False] * n
        for i in range(0, n):
            if not visited[i]:
                number_connected += 1
                dfs(i, visited)
        return number_connected - 1