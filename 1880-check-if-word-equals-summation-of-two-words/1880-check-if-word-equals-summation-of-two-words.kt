class Solution {
    fun sum(word: String): Int {
        var res = 0
        for (i in 0..(word.length-1)) {
            res *= 10
            res += (word[i] - 'a')
        }
        return res
    }
    
    fun isSumEqual(firstWord: String, secondWord: String, targetWord: String): Boolean {
        return sum(firstWord) + sum(secondWord) === sum(targetWord)
    }
}