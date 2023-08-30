class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        dp = [0] * (n+1)
        for i in range(1, n+1):
            curmax = 0
            for j in range(1, min(k, i)+1):
                curmax = max(curmax, arr[i-j])
                dp[i] = max(dp[i], dp[i-j] + curmax * j)
        return dp[n]
        
        dp = [0] * (len(arr) + 1)
        for i in range(1, len(arr)+1):                      # find solutions for all subarrays 
            mx = 0                                          # find max in current subarray
            for j in range(1, k+1):                         # slice the current arr into k or less subarrays
                if i - j >= 0:             
                    mx = max(mx, arr[i-j])                 # find max element in current subarray
                    dp[i] = max(dp[i], dp[i-j] + mx * j)    # max(current solution, dp at previous solution + current max * number of elements in subarray)
        return dp[len(arr)]