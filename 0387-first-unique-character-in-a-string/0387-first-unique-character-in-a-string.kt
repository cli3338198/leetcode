class Solution {
    fun firstUniqChar(s: String): Int {
        val map: MutableMap<Char, Int> = mutableMapOf()
        for (c in s) {
            if (map.get(c) !== 0) {
                map.set(c, map.getOrDefault(c, 0) + 1)
            } else {
                map.set(c, 1)
            }
        }
        for (i in 0..(s.length-1)) {
            if (map.get(s[i]) === 1) {
                return i
            }
        }
        return -1
    }
}