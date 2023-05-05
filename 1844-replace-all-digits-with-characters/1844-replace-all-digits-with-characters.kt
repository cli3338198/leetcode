class Solution {
    fun replaceDigits(s: String): String {
        var res = StringBuilder()
        for (i in 0 until s.length) {
            if (i % 2 != 0) {
                res.append(s[i-1] + s[i].toInt() - '0'.toInt())
            } else {
                res.append(s[i])
            }
        }
        return res.toString()
    }
}