/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const dp = {}
    const res = []
    wordDict = new Set(wordDict)
    helper(0, [])
    return res.map(arr => arr.join(" "))
    
    function helper(idx, list) {
        if (idx >= s.length) {
            return res.push(list)
        }
        for (let i=idx; i <= s.length; i++) {
            if (wordDict.has(s.substring(idx, i))) {
                helper(i, [...list, s.substring(idx, i)])
            }
        }
    }
};