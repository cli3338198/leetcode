class Solution {
    fun maximum69Number (num: Int): Int {
        val str = StringBuilder(num.toString())
        val s = num.toString()
        for (i in s.indices) {
            if (s[i] == '6') {
                str[i] = '9'
                break
            }
        }
        return str.toString().toInt()
    }
}