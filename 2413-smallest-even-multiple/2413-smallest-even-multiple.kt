class Solution {
    fun smallestEvenMultiple(n: Int): Int {
        for (i in 2..(n * 150)) {
            if (i % 2 == 0 && i % n == 0) {
                return i
            }
        }
        return n
    }
}