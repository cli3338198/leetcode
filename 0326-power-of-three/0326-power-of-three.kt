class Solution {
    fun isPowerOfThree(n: Int): Boolean {
        if (n === 1) return true
        if (n <= 0 || n % 3 !== 0) return false
        return isPowerOfThree(n / 3)
    }
}