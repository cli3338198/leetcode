class Solution {
    fun countDigits(num: Int): Int {
        var res = 0
        var n = num
        while (n !== 0) {
            res += if (num % (n % 10) === 0) 1 else 0
            n = n / 10
        }
        return res
    }
}