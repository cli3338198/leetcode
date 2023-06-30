/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = Infinity
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        let l = i + 1
        let r = nums.length-1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (Math.abs(target - sum) < Math.abs(res)) {
                res = target - sum
            }
            if (sum > target) {
                r--
            } else {
                l++
            }
        }
    }
    return target - res
};

threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let diff = Infinity
    let sum
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue
        let l = i + 1
        let r = nums.length-1
        while (l < r) {
            const curSum = nums[i] + nums[l] + nums[r]
            const curDiff = Math.abs(target - curSum)
            if (curDiff === 0) {
                return curSum
            } else if (curDiff < diff) {
                sum = curSum
                diff = curDiff
            } else if (curSum > target) {
                r--
            } else {
                l++
            }
        }
    }
    return sum
}

threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSumClosest(3, 0, target)
    
    function kSumClosest(k, i, target) {
        if (k === 2) return twoSumClosest(i, target)
        let diff = Infinity
        let sum = null
        for (i; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            const kMinusOneClosestSum = kSumClosest(k-1, i+1, target-nums[i])
            const curSum = nums[i] + kMinusOneClosestSum
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
    
    function twoSumClosest(i, target) {
        let l = i
        let r = nums.length-1
        let diff = Infinity
        let sum
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
}