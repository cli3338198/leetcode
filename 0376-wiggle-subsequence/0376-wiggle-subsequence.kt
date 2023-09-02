class Solution {
    fun wiggleMaxLength(nums: IntArray): Int {
        var up = 1
        var down = 1
        for (i in 1..nums.size-1) {
            if (nums[i] > nums[i-1]) {
                up = down + 1
            } else if (nums[i] < nums[i-1]) {
                down = up + 1
            }
        }
        return Math.max(up, down)
    }
}