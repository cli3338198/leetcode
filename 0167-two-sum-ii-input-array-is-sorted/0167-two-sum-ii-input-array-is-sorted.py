class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        def bin_search(l: int, r: int, target: int) -> int:
            nonlocal numbers
            while l < r:
                m = (l+r) // 2
                if numbers[m] == target:
                    return m
                elif numbers[m] > target:
                    r = m - 1
                else:
                    l = m + 1
            return l if numbers[l] == target else -1
        
        for i, n in enumerate(numbers):
            idx = bin_search(i+1, len(numbers)-1, target-n)
            if idx != -1:
                return [i+1, idx+1]