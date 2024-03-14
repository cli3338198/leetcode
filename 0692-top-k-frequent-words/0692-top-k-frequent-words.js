/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = {}
    for (const word of words) {
        freq[word] = freq[word] + 1 || 1
    }
    words = Array.from(new Set(words))
    words.sort((a, b) => {
        if (freq[a] > freq[b]) {
            return -1
        } else if (freq[b] > freq[a]) {
            return 1
        } else if (freq[a] === freq[b]) {
            if (a < b) {
                return -1
            } else {
                return 1
            }
        }
    })
    return words.slice(0, k)
};