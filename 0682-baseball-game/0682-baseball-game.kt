class Solution {
    fun calPoints(operations: Array<String>): Int {
        var scores = Stack<Int>()
        for (op in operations) {
            when (op) {
                "+" -> scores.push(scores[scores.size-1] + scores[scores.size-2])
                "D" -> scores.push(scores[scores.size-1] * 2)
                "C" -> scores.pop()
                else -> scores.push(op.toInt())
            }
        }
        return scores.sum()
    }
}