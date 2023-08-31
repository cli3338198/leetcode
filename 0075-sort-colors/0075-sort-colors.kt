class Solution {
    fun sortColors(nums: IntArray): Unit {
        var i = 0
        var j = 0
        var k = nums.size-1
        while (j <= k) {
            if (nums[j] === 0) {
                val temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp
                i++
            } else if (nums[j] === 2) {
                val temp = nums[k]
                nums[k] = nums[j]
                nums[j] = temp
                j--
                k--
            }
            j++
        }
    }
}