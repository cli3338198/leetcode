class Solution {
    fun smallerNumbersThanCurrent(nums: IntArray): IntArray {
        val cnts = IntArray(101) { 0 }
        for (n in nums) {
            cnts[n] += 1
        }
        for (i in 1..100) {
            cnts[i] += cnts[i-1]
        }
        return (nums.map { if (it != 0) cnts[it-1] else 0 }).toIntArray()
    }
}