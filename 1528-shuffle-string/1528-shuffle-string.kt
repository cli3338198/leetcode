class Solution {
    fun restoreString(s: String, indices: IntArray): String {
        val res = CharArray(s.length)
        for (i in 0..(indices.size-1)) {
            res[indices[i]] = s[i]
        }
        return res.joinToString(separator="")
    }
}