class Solution {
    fun divideArray(nums: IntArray): Boolean {
        val cnt = IntArray(501){0}
        for (n in nums) {
            cnt[n]++
        }
        for (n in cnt) {
            if (n % 2 !== 0) {
                return false
            }
        }
        return true
    }
}