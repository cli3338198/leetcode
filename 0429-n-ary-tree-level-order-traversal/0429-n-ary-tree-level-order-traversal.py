"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if not root:
            return []
        q, res = [root], []
        while q:
            new_q, cur_lvl = deque(), []
            for node in q:
                cur_lvl.append(node.val)
                for child in node.children:
                    new_q.append(child)
            res.append(cur_lvl)
            q = new_q
        return res