/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    const map = {}
    let i = 0
    let res = 0
    for (let j=0; j < answerKey.length; j++) {
        map[answerKey[j]] = map[answerKey[j]] + 1 || 1
        while (Math.min(map["T"], map["F"]) > k) {
            map[answerKey[i++]]--
        }
        res = Math.max(res, j - i + 1)
    }
    return res
};