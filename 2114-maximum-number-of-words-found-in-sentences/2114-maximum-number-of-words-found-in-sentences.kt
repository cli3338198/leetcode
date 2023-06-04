class Solution {
    fun mostWordsFound(sentences: Array<String>): Int {
        var res = 0
        for (sentence in sentences) {
            res = Math.max(res, sentence.split(" ").size)
        }
        return res
    }
}