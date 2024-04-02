/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const freq = { 0: 1 }
    let sum = 0, count = 0
    for (const n of nums) {
        sum += n
        const diff = sum - k
        if (diff in freq) {
            count += freq[diff]
        }
        freq[sum] = freq[sum] + 1 || 1
    }
    return count
};