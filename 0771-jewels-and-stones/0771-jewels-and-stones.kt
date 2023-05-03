class Solution {
    fun numJewelsInStones(jewels: String, stones: String): Int {
        var res = 0
        for (stone in stones) {
            if (jewels.contains(stone)) {
                res += 1
            }
        }
        return res
    }
}