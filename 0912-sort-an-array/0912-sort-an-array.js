/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums)
    
    function mergeSort(nums) {
        if (nums.length < 2) return nums
        const mid = Math.floor(nums.length/2)
        const left = mergeSort(nums.slice(0, mid))
        const right = mergeSort(nums.slice(mid))
        return merge(left, right)
    }
    
    function merge(left, right) {
        const res = []
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                res.push(left.shift())
            } else {
                res.push(right.shift())
            }
        }
        return [...res, ...left, ...right]
    }
};