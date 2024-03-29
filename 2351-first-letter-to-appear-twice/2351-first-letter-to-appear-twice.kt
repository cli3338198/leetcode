class Solution {
    fun repeatedCharacter(s: String): Char {
        val set = HashSet<Char>()
        for (i in s.indices) {
            val c = s[i]
            if (set.contains(c)) {
                return c
            }
            set.add(c)
        }
        return ""[0]
    }
}