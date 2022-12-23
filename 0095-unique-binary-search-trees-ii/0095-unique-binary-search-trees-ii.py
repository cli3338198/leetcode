# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        
        def helper(l, r):
            if l > r:
                return [None]
            
            res = []
            
            for root in range(l, r+1):
                for left in helper(l, root-1):
                    for right in helper(root+1, r):
                        tree = TreeNode(root)
                        tree.left = left
                        tree.right = right
                        res.append(tree)
            
            return res
        
        return helper(1, n)