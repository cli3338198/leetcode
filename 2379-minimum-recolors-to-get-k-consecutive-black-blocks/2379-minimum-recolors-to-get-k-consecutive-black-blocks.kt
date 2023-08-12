class Solution {
    fun minimumRecolors(blocks: String, k: Int): Int {
        var min = k
        var l = 0
        var black = 0
        var white = 0
        for (r in 0..blocks.length-1) {
            if (blocks[r] === "W".first()) {
                white++
            } else {
                black++
            }
            if (r - l + 1 === k) {
                min = Math.min(min, white)
                if (blocks[l] === "W".first()) {
                    white--
                } else {
                    black++
                }
                l++
            }
        }
        return min
    }
}