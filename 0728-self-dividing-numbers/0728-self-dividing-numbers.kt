class Solution {
    fun helper(n: Int): Boolean {
        val original = n
        var num = n
        while (num !== 0) {
            val digit = num % 10
            if (digit === 0 || original % digit !== 0) {
                return false
            }
            num /= 10
        }
        return true
    }
    
    fun selfDividingNumbers(left: Int, right: Int): List<Int> {
        val res = ArrayList<Int>()
        for (i in left..right) {
            if (this.helper(i)) {
                res += i
            }
        }
        return res
    }
}