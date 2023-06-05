"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        if not root: 
            return []
        stack, res = [root], []
        while stack:
            root = stack.pop()
            res.append(root.val)
            if root.children:
                while root.children:
                    stack.append(root.children.pop())
        return res