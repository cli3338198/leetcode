class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        arr.sort()
        for i, n in enumerate(arr):
            l, r = 0, len(arr)-1
            while l <= r:
                m = (l+r) // 2
                if arr[m] == n * 2 and i != m:
                    return True
                elif arr[m] > n * 2:
                    r = m - 1
                else:
                    l = m + 1
        return False