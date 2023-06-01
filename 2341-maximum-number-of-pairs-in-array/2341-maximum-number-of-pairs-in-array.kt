class Solution {
    fun numberOfPairs(nums: IntArray): IntArray {
        val arr = IntArray(101){0}
        val res = IntArray(2){0}
        for (n in nums) {
            if (arr[n] !== 0) {
                arr[n] = 0
                res[0]++
                res[1]--
            } else {
                arr[n] = 1
                res[1]++
            }
        }
        return res
    }
}