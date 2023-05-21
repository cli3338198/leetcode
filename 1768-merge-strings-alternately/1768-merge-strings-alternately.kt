class Solution {
    fun mergeAlternately(word1: String, word2: String): String {
        var res = ""
        val max = Math.max(word1.length, word2.length)
        for (i in 0..(max-1)) {
            if (i < word1.length) {
                res += word1[i]
            }
            if (i < word2.length) {
                res += word2[i]
            }
        }
        return res
    }
}