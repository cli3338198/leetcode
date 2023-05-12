class Solution {
    fun sumOddLengthSubarrays(arr: IntArray): Int {
        var res = 0
        for (i in 0..(arr.size-1)) {
            var cur_sum = 0
            for (j in i..(arr.size-1)) {
                cur_sum += arr[j]
                res += if ((j - i + 1) % 2 != 0) cur_sum else 0
            }
        }
        return res
    }
}