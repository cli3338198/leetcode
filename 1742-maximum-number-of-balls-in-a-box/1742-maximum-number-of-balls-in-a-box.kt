class Solution {
    fun getNo(n: Int): Int {
        var res = 0
        var num = n
        while (num !== 0) {
            res += num % 10
            num /= 10
        }
        return res
    }
    
    fun countBalls(lowLimit: Int, highLimit: Int): Int {
        var cnt = IntArray(highLimit+1){0}
        var res = 0
        for (i in lowLimit..highLimit) {
            val n = getNo(i)
            cnt[n]++
            res = Math.max(res, cnt[n])
        }
        return res
    }
}