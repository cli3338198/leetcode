class Solution {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        var res: Int = 0
        for (op in operations) {
            if (op == "++X" || op == "X++") {
                res += 1
            } else {
                res -= 1
            }
        }
        return res
    }
}