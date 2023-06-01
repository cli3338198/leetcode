# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        mp, stack, prev, original = {}, [], None, root
        while root or stack:
            if root:
                stack.append(root)
                root = root.left
            else:
                root = stack[-1]
                if root.right and root.right != prev:
                    root = root.right
                else:
                    if not root.left and not root.right:
                        mp[root] = root.val
                    elif root.val == 2:
                        mp[root] = mp[root.left] or mp[root.right]
                    else:
                        mp[root] = mp[root.left] and mp[root.right]
                    stack.pop()
                    prev = root
                    root = None
        return mp[original]