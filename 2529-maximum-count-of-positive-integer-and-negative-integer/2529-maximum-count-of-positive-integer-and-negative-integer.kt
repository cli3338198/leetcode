class Solution {
    fun maximumCount(nums: IntArray): Int {
        var posCount = 0
        var negCount = 0
        var res = 0
        for (num in nums) {
            if (num === 0) {
                continue
            } else if (num > 0) {
                posCount++
            } else {
                negCount++
            }
            res = Math.max(res, Math.max(posCount, negCount))
        }
        return res
    }
}