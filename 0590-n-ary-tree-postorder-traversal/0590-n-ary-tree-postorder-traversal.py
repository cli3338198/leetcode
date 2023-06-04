"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if not root:
            return []
        res = []
        for child in root.children:
            for sub in self.postorder(child):
                res.append(sub)
        res.append(root.val)
        return res