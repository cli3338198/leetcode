function numberOfSubarrays(nums: number[], k: number): number {
    let l = 0, res = 0, count = 0
    for (let r=0; r < nums.length; r++) {
        if (isOdd(nums[r])) {
            k--
            count = 0
        }
        while (k === 0) {
            if (isOdd(nums[l])) k++
            l++
            count++
        }
        res += count
    }
    return res
        
    function isOdd(n: number): boolean {
        return n % 2 !== 0
    }
};