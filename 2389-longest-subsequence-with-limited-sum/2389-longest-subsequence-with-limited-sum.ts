function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a, b) => a - b)
    for (let i=1; i < nums.length; i++) {
        nums[i] += nums[i-1]
    }
    const res: number[] = []
    for (let i=0; i < queries.length; i++) {
        res[i] = binSearch(queries[i])
    }
    return res
    
    function binSearch(sum: number): number {
        let l = 0
        let r = nums.length-1
        while (l < r) {
            const m = Math.floor((l+r)/2)
            const curSum = nums[m]
            if (curSum === sum) {
                return m + 1
            } else if (curSum > sum) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return nums[l] > sum ? l : l + 1 
    }
};