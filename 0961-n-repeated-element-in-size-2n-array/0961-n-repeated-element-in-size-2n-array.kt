class Solution {
    fun repeatedNTimes(nums: IntArray): Int {
        val set = mutableSetOf<Int>()
        for (n in nums) {
            if (set.contains(n)) return n
            set.add(n)
        }
        return 0
    }
}