/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const set = new Set(nums)
    for (const n of nums) {
        set.add(reverse(n))
    }
    return set.size
    
    function reverse(n) {
        return Number((String(n)).split("").reverse().join(""))
    }
};

countDistinctIntegers = function(nums) {
    const set = new Set(nums)
    for (const n of nums) {
        set.add(reverse(n))
    }
    return set.size
    
    function reverse(n) {
        let res = 0
        while (n) {
            const lastDigit = n % 10
            res = res * 10 + lastDigit
            n = Math.floor(n / 10)
        }
        return res
    }
}