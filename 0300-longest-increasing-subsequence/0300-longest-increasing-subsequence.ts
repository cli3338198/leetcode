function lengthOfLIS(nums: number[]): number {
    const dp: number[] = []
    for (const n of nums) {
        if (!dp.length || dp[dp.length-1] < n) {
            dp.push(n)
        } else {
            const idx = binarySearch(dp, n)
            dp[idx] = n
        }
    }
    return dp.length
    
    function binarySearch(dp: number[], n: number): number {
        let l = 0
        let r = dp.length-1
        while (l < r) {
            const m = Math.floor((l+r)/2)
            if (dp[m] < n) {
                l = m + 1
            } else {
                r = m
            }
        }
        return l
    }
};