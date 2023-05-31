class Solution {
    fun reverse(num: Int): Int {
        var res = 0
        var n = num
        while (n !== 0) {
            res *= 10
            res += n % 10
            n /= 10
        }
        return res
    }
    
    fun isSameAfterReversals(num: Int): Boolean {
        return reverse(reverse(num)) === num
    }
}