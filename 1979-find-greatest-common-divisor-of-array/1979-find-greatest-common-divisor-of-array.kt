class Solution {
    fun findGCD(nums: IntArray): Int {
        var min = 1000
        var max = -1000
        for (num in nums) {
            min = Math.min(min, num)
            max = Math.max(max, num)
        }
        var res = 1
        for (i in 1..max) {
            if (min % i === 0 && max % i === 0) {
                res = Math.max(res, i)
            }
        }
        return res
    }
}