class Solution {
    fun jump(nums: IntArray): Int {
        // var i = 0
        // var lastPosition = 0
        // var maxReach = 0
        // var jumps = 0
        // while (lastPosition < nums.size-1) {
        //     maxReach = Math.max(maxReach, i + nums[i])
        //     if (i === lastPosition) {
        //         lastPosition = maxReach
        //         jumps++
        //     }
        //     i++
        // }
        // return jumps
        
        var jumps = 0
        var lastPosition = 0
        var maxReach = 0
        for (i in 0..nums.size-1) {
            // have reached end, break
            if (lastPosition === nums.size-1) {
                break
            }
            // update the farthest we can jump within the current "window"
            maxReach = Math.max(maxReach, i + nums[i])
            // we've reached the end of our "window"
            // set the start of our next "window" to the farthest we can reach from the prev window
            // increment the jumps
            if (i === lastPosition) {
                lastPosition = maxReach
                jumps++
            }
        }
        return jumps
    }
}