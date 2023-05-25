class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        mx = -1
        for i in range(len(arr)-1, -1, -1):
            tmp = arr[i]
            arr[i] = mx
            mx = max(mx, tmp)
        return arr