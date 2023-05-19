/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let smallest = Infinity
    let greatest = -Infinity
    for (const num of nums) {
        smallest = Math.min(smallest, num)
        greatest = Math.max(greatest, num)
    }
    let res = 1
    for (let i=1; i <= greatest; i++) {
        if (smallest % i === 0 && greatest % i === 0) {
            res = Math.max(res, i)
        }
    }
    return res
};

findGCD = function(nums) {
    nums.sort((a, b) => a - b)
    return helper(nums.at(0), nums.at(-1))
    
    function helper(smallest, greatest) {
        return greatest === 0 ? smallest : helper(greatest, smallest % greatest)
    }
}