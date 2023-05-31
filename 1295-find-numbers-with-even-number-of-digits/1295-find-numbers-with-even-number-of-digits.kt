class Solution {
    fun findNumbers(nums: IntArray): Int {
        var res = 0
        for (num in nums) {
            var digits = 0
            var cur = num
            while (cur !== 0) {
                cur /= 10
                digits++
            }
            if (digits % 2 === 0) {
                res++
            }
        }
        return res
    }
}