class Solution {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        var res: Int = 0
        for (op in operations) {
            when (op) {
                "++X" -> res += 1
                "X++" -> res += 1
                else -> res -= 1
            }
        }
        return res
    }
}