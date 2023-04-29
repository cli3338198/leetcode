class Solution {
    fun getConcatenation(nums: IntArray): IntArray {
        var res = nums
        res += nums
        return res
    }
}