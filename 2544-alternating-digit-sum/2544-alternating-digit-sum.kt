class Solution {
    fun alternateDigitSum(n: Int): Int {
        val arr = mutableListOf<Int>()
        var num = n
        while (num !== 0) {
            arr.add(num % 10)
            num /= 10
        }
        var res = 0
        var sign = 1
        for (i in arr.size-1 downTo 0) {
            res += sign * arr[i]
            sign *= -1
        }
        return res
    }
}