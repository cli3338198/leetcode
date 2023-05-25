class Solution {
    fun uniqueOccurrences(arr: IntArray): Boolean {
        val map = HashMap<Int, Int>()
        for (i in 0..(arr.size-1)) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1)
        }
        val set = mutableSetOf<Int>()
        for (v in map.values) {
            if (set.contains(v)) return false
            set.add(v)
        }
        return true
    }
}