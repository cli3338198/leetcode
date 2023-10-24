function subsets(nums: number[]): number[][] {
    const ans: number[][] = [[]]
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        const sub: number[][] = []
        for (const a of ans) {
            sub.push([...a, nums[i]])
        }
        ans.push(...sub)
    }
    return ans
    
    // 
    
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