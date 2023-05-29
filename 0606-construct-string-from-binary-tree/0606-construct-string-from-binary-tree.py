# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        # if not root:
        #     return ""
        # res = "" + str(root.val)
        # if root.left:
        #     res += f"({self.tree2str(root.left)})"
        # if root.right:
        #     if not root.left:
        #         res += "()"
        #     res += f"({self.tree2str(root.right)})"
        # return res
        
        if not root:
            return ""
        stack, res, seen = [], "", set()
        stack.append(root)
        while stack:
            node = stack[-1]
            if node in seen:
                stack.pop()
                res += ")"
            else:
                seen.add(node)
                res += "(" + str(node.val)
                if not node.left and node.right:
                    res += "()"
                if node.right:
                    stack.append(node.right)
                if node.left:
                    stack.append(node.left)
        return res[1:-1:]