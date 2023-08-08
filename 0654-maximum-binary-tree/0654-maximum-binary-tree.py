# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        def dfs(lo: int, hi: int) -> Optional[TreeNode]:
            nonlocal nums
            if lo > hi:
                return None
            mx = nums[lo]
            idx = lo
            for i in range(lo, hi+1):
                if nums[i] > mx:
                    mx = nums[i]
                    idx = i
            root = TreeNode(mx)
            root.left = dfs(lo, idx-1)
            root.right = dfs(idx+1, hi)
            return root
        
        return dfs(0, len(nums)-1)