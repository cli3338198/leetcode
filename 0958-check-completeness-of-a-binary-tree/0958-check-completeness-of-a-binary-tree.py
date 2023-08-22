# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        q, found_null = deque([root]), False
        while q:
            node = q.popleft()
            if not node:
                found_null = True
            else:
                if found_null == True:
                    return False
                q.append(node.left)
                q.append(node.right)
        return True