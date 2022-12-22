class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        
        if n == 0: return 0
        
        l = 0
        r = n-1
        res = 0
        leftMax = height[l]
        rightMax = height[r]
        
        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, height[l])
                res += leftMax - height[l]
            else:
                r -= 1
                rightMax = max(rightMax, height[r])
                res += rightMax - height[r]
        
        return res