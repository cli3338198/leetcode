class Solution {
    fun sumOfUnique(nums: IntArray): Int {
        val yes = mutableSetOf<Int>()
        val no = mutableSetOf<Int>()
        for (n in nums) {
            if (no.contains(n)) {
                continue
            } else if (yes.contains(n)) {
                yes.remove(n)
                no.add(n)
            } else {
                yes.add(n)
            }
        }
        return yes.toList().sum()
    }
}