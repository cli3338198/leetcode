class Solution {
    fun commonFactors(a: Int, b: Int): Int {
        var res = 0
        for (i in 1..(Math.min(a, b))) {
            if (a % i == 0 && b % i == 0) {
                res += 1
            }
        }
        return res
    }
}