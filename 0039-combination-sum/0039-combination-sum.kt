class Solution {
    fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {
        val dp = Array<MutableList<List<Int>>>(target + 1) { mutableListOf() }
        dp[0].add(emptyList())
        for (candidate in candidates) {
            for (curTarget in 1..target) {
                if (candidate <= curTarget) {
                    for (sub in dp[curTarget-candidate]) {
                        val newCombination = ArrayList(sub)
                        newCombination.add(candidate)
                        dp[curTarget].add(newCombination)
                    }
                }
            }
        }
        return dp[target]
    }
}