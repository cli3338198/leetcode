class Solution {
    fun numTeams(rating: IntArray): Int {
        val n = rating.size
        val up = Array(n) {0}
        val down = Array(n) {0}
        var res = 0
        for (i in 0..n-1) {
            for (j in 0..i-1) {
                if (rating[j] < rating[i]) {
                    up[i]++
                    res += up[j]
                } else {
                    down[i]++
                    res += down[j]
                }
            }
        }
        return res
    }
}