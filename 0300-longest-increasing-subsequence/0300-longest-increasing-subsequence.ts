function lengthOfLIS(nums: number[]): number {
    const dp: number[][] = []
    for (const n of nums) {
        if (!dp.length || dp.at(-1).at(-1) < n) {
            dp.push([n])
        } else {
            const idx = binarySearch(n)
            dp[idx].push(n)
        }
    }
    return dp.length
    
    function binarySearch(n: number): number {
        let l = 0, r = dp.length-1
        while (l < r) {
            const m = Math.floor((l+r)/2)
            const num = dp[m].at(-1)
            if (num < n) {
                l = m + 1
            } else {
                r = m
            }
        }
        return l
    }
};