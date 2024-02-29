class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        def dfs(nodes, i, color):
            if nodes[i] != 0 and nodes[i] != color:
                return False
            if nodes[i] == color:
                return True
            nodes[i] = color
            for next_node in graph[i]:
                if not dfs(nodes, next_node, -color):
                    return False
            return True
            
        n = len(graph)
        nodes = [0 for _ in range(0, n)]
        for i in range(0, n):
            if nodes[i] == 0:
                if not dfs(nodes, i, 1):
                    return False
        return True