function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b)
    return kSumClosest(3, 0, target)
    
    function kSumClosest(k: number, i: number, target: number): number {
        if (k === 2) return twoSumClosest(i, target)
        let diff = Infinity
        let sum: number
        for (i; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            const kMinusOneSumClosest = kSumClosest(k-1, i+1, target-nums[i])
            const curSum = nums[i] + kMinusOneSumClosest
            const curDiff = Math.abs(target - curSum)
            if (curDiff === 0) {
                return curSum
            } else if (curDiff < diff) {
                diff = curDiff
                sum = curSum
            }
        }
        return sum
    }
    
    function twoSumClosest(i: number, target: number): number {
        let l = i
        let r = nums.length-1
        let diff = Infinity
        let sum: number
        while (l < r) {
            const curSum = nums[l] + nums[r]
            const curDiff = Math.abs(target - curSum)
            if (curDiff === 0) {
                return curSum
            } else if (curDiff < diff) {
                diff = curDiff
                sum = curSum
            } else if (curSum > target) {
                r--
            } else {
                l++
            }
        }
        return sum
    }
};



