/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const prefixes = Array(nums.length+1).fill(0)
    for (let i=0; i < nums.length; i++) {
        prefixes[i+1] = (prefixes[i] + nums[i] % k) % k
    }
    const map = {}
    for (let i=0; i < prefixes.length; i++) {
        if (prefixes[i] in map && i - map[prefixes[i]]) {
            return true
        }
        if (!(prefixes[i] in map)) map[prefixes[i]] = i
    }
    return false
};

checkSubarraySum = function(nums, k) {
    const set = new Set()
    for (let i=0, curSum=0; i < nums.length; curSum += nums[i], i++) {
        if (set.has((curSum + nums[i]) % k)) return true
        set.add(curSum % k)
    }
    return false
}

checkSubarraySum = function(nums, k) {
    const map = {"0": 0}
    let cursum = 0
    for (let i=0; i < nums.length; i++) {
        cursum += nums[i]
        if (!((cursum % k) in map)) {
            map[cursum % k] = i + 1
        } else if (map[cursum % k] < i) {
            return true
        }
    }
    return false
}
