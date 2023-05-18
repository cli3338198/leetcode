class Solution {
    fun prefixCount(words: Array<String>, pref: String): Int {
        var res = 0
        for (word in words) {
            for (i in 0..(word.length-1)) {
                if (i >= pref.length || word[i] !== pref[i]) break
                if (i === pref.length-1) res += 1
            }
        }
        return res
    }
}