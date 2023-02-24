class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        
        def helper(k: int) -> int: 
            i, res, mp = 0, 0, {}
            
            for j, num in enumerate(nums):
                if mp.get(num, 0) == 0: k -= 1
                mp[num] = mp.get(num, 0) + 1
                
                while k < 0:
                    mp[nums[i]] -= 1
                    if mp[nums[i]] == 0: k += 1
                    i += 1
                    
                res += j - i + 1
                
            return res             
        
        return helper(k) - helper(k-1)