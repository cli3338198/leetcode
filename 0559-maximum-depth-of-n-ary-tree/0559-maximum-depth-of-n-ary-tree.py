"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0
        return 1 + max([self.maxDepth(child) for child in root.children] + [0])
        
        #
        
        if not root:
            return 0
        res = 1
        for child in root.children:
            res = max(res, 1 + self.maxDepth(child))
        return res