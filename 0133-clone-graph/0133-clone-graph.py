"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        
        mp = {}
    
        def helper(node: 'Node') -> 'Node':
            if not node: return node
            
            if node.val not in mp:
                mp[node.val] = Node(node.val)
                mp[node.val].neighbors += map(helper, node.neighbors)              
            
            return mp[node.val]
        
        return helper(node)