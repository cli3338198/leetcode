class Solution {
    fun subtractProductAndSum(n: Int): Int {
        var prod = 1
        var sum = 0
        val str = n.toString()
        for (c in str) {
            prod = prod * Character.getNumericValue(c)
            sum = sum + Character.getNumericValue(c)
        }
        return prod - sum
    }
}