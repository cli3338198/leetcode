function subsets(nums: number[]): number[][] {
    nums.sort()
    const res: number[][] = []
    dfs(0, [])
    return res
    
    function dfs(i: number, sub: number[]) {
        res.push(sub)
        for (i; i < nums.length; i++) {
            dfs(i+1, [...sub, nums[i]])
        }
    }
};