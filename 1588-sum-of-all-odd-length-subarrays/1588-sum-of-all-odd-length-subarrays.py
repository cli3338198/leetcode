class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        res = 0
        for i in range(len(arr)):
            cur_sum = 0
            for j in range(i, len(arr)):
                cur_sum += arr[j]
                res += cur_sum if (j - i + 1) % 2 != 0 else 0
        return res