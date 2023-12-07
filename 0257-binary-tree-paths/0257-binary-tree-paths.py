# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        def dfs(root: Optional[TreeNode]) -> List[str]:
            if not root:
                return []
            if not root.left and not root.right:
                return [str(root.val)]
            left, right = dfs(root.left), dfs(root.right)
            cur_list = []
            for sub in left + right:
                cur_list.append(f'{root.val}->{sub}')
            return cur_list
                
        return dfs(root)
            
                