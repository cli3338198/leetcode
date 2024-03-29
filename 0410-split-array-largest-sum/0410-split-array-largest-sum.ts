function splitArray(nums: number[], k: number): number {
//     const n = nums.length
//     const dp: Record<string, number> = {}
//     const suffixSums: number[] = Array(n+1).fill(0)
//     for (let i=n-1; i >= 0; i--) {
//         suffixSums[i] = suffixSums[i+1] + nums[i]
//     }
//     return helper(0, k)
    
//     function helper(i: number, k: number): number {
//         const key = `${i} ${k}`
//         if (key in dp) return dp[key]
//         if (k === 1) return suffixSums[i]
//         let res = Infinity
//         let curSum = 0
//         for (let j=i; j < n-1; j++) {
//             curSum += nums[j]
//             res = Math.min(res, Math.max(curSum, helper(j+1, k-1)))
//         }
//         return dp[key] = res
//     }
    
    // const n = nums.length
    // const sums: number[] = Array(n+1).fill(0)
    // for (let i=0; i < n; i++) {
    //     sums[i+1] = sums[i] + nums[i]
    // }
    // const dp: number[][] = Array(k).fill(0).map(() => Array(n).fill(Infinity))
    // for (let i=0; i < n; i++) {
    //     dp[0][i] = sums[n] - sums[i]
    // }
    // for (let s=1; s < k; s++) {
    //     for (let i=0; i < n; i++) {
    //         for (let j=i+1; j < n; j++) {
    //             dp[s][i] = Math.min(dp[s][i], Math.max(dp[s-1][j], sums[j]-sums[i]))
    //         }
    //     }
    // }
    // return dp[k-1][0]
    
    // const n = nums.length
    // const sums: number[] = Array(n+1).fill(0)
    // for (let i=0; i < n; i++) {
    //     sums[i+1] = sums[i] + nums[i]
    // }
    // const dp: number[] = Array(n).fill(Infinity)
    // for (let i=0; i < n; i++) {
    //     dp[i] = sums[n] - sums[i]
    // }
    // for (let s=1; s < k; s++) {
    //     for (let i=0; i < n; i++) {
    //         for (let j=i+1; j < n; j++) {
    //             dp[i] = Math.min(dp[i], Math.max(dp[j], sums[j]-sums[i]))
    //         }
    //     }
    // }
    // return dp[0]
    
    let l = Math.max(...nums)
    let r = nums.reduce((acc, val) => acc + val, 0)
    let res = r
    while (l <= r) {
        const m = Math.floor((l+r)/2)
        if (canSplit(m)) {
            res = m
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return res
    
    function canSplit(largest: number): boolean {
        let numArrays = 0
        let curSum = 0
        for (const n of nums) {
            curSum += n
            if (curSum > largest) {
                curSum = n
                numArrays++
            }
        }
        return numArrays + 1 <= k
    }
};