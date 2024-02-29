class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        # every edge has to connect v1 -> v2
        # if current node is v1 -> v1 => return false
        # traverse all node in 0 - n-1
        # maintain a list of true/false
        # if we're traversing and we hit a true, we can immediately stop traversing
        # if we hit a false, then we immediately return false
        # we will dfs(n) in 0, n-1
        
        def dfs(nodes, i, color):
            # if current node is equal 0 and its not color, return false
            if nodes[i] != 0 and nodes[i] != color:
                return False
            if nodes[i] == color:
                return True
            nodes[i] = color
            # if current node is equal to color, return true
            # dfs(nodes, nodes in nodes[i], -color)
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