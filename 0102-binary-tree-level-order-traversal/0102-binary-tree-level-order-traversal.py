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
        if not root:
            return []
        q, res = deque([root]), []
        while q:
            subres, l = [], len(q)
            for i in range(0, l):
                j = q.popleft()
                subres.append(j.val)
                if j.left:
                    q.append(j.left)
                if j.right:
                    q.append(j.right)
            res.append(subres)
        return res
        
        #
        
        mp = defaultdict(list)
        self.dfs(mp, root, 0)
        return [x for _, x in sorted(mp.items(), key=lambda x: x[0])]