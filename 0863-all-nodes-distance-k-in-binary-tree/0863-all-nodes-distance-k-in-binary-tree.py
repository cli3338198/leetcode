# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        mp = {}
        
        def graph(parent: Optional[TreeNode], root: Optional[TreeNode]) -> None:
            if not root:
                return
            if root and parent:
                mp[root.val] = mp.get(root.val, [])
                mp[parent.val] = mp.get(parent.val, [])
                mp[root.val].append(parent.val)
                mp[parent.val].append(root.val)
            graph(root, root.left)
            graph(root, root.right)
        
        graph(None, root)
        q, d, seen = [target.val], 0, set() | set([target.val])
        for i in range(0, k):
            q = [next for cur in q for next in mp.get(cur, []) if next not in seen]
            seen |= set(q)
        return q