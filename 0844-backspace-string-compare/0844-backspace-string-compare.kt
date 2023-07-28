class Solution {
    fun backspaceCompare(s: String, t: String): Boolean {
        var i = s.length-1
        var j = t.length-1
        while (i >= 0 || j >= 0) {
            val i1 = getNext(s, i)
            val j1 = getNext(t, j)
            if (i1 < 0 && j1 < 0) {
                return true
            }
            if (i1 < 0 || j1 < 0) {
                return false
            }
            if (s[i1] !== t[j1]) {
                return false
            }
            i = i1 - 1
            j = j1 - 1
        }
        return true
    }
    
    fun getNext(s: String, i: Int): Int {
        var skip = 0
        var j = i
        while (j >= 0) {
            if (s[j] === "#".first()) {
                skip++
            } else if (skip > 0) {
                skip--
            } else {
                break
            }
            j--
        }
        return j
    }
}