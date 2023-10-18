# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self, mp: dict, root: Optional[TreeNode], lvl: int) -> None:
        if not root:
            return
        mp[lvl].append(root.val)
        self.dfs(mp, root.left, lvl+1)
        self.dfs(mp, root.right, lvl+1)
    
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        mp = defaultdict(list)
        self.dfs(mp, root, 0)
        return [x for _, x in sorted(mp.items(), key=lambda x: x[0])]