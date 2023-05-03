class Solution {
    fun numJewelsInStones(jewels: String, stones: String): Int {
        var res = 0
        for (stone in stones) {
            for (jewel in jewels) {
                if (stone == jewel) {
                    res += 1
                }
            }
        }
        return res
    }
}