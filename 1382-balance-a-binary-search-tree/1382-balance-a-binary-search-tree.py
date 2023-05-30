# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        
        def dfs(cur: TreeNode) -> List[TreeNode]:
            res = []
            stack = []
            while cur or stack:
                if cur:
                    stack.append(cur)
                    cur = cur.left
                else:
                    cur = stack.pop()
                    res.append(cur.val)
                    cur = cur.right
            return res
        
        arr = dfs(root)
        
        def balance(lo: int, hi: int) -> TreeNode:
            nonlocal arr
            if lo > hi:
                return None
            mid = (lo + hi) // 2
            root = TreeNode(arr[mid])
            root.left = balance(lo, mid-1)
            root.right = balance(mid+1, hi)
            return root
        
        return balance(0, len(arr)-1)
            
                    