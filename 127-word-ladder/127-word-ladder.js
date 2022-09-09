/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    const graph = {}
    graph[beginWord] = []
    graph[endWord] = []
    for (let word of wordList) {
        if (!(word in graph)) graph[word] = []
        if (isOneDiff(beginWord, word)) {
            graph[beginWord].push(word)
        }
        if (isOneDiff(endWord, word)) {
            graph[word].push(endWord)
        }
    }
    for (let i=0; i < wordList.length; i++) {
        for (let j=i+1; j < wordList.length; j++) {
            if (isOneDiff(wordList[i], wordList[j])) {
                graph[wordList[i]].push(wordList[j])
                graph[wordList[j]].push(wordList[i])
            }
        }
    }
    const q = [[beginWord, 1]]
    let res = Infinity
    const visits = {}
    while (q.length) {
        const [word, cost] = q.shift()
        if (word === endWord) {
            res = Math.min(res, cost)
        }
        if (!(word in visits) || visits[word] > cost) {
            visits[word] = cost
            for (let nextWord of graph[word] || []) {
                q.push([nextWord, cost + 1])
            }
        }
    }
    return res !== Infinity ? res : 0
    

    function isOneDiff(a, b) {
        let diff = 0
        for (let i=0; i < a.length; i++) {
            if (a[i] !== b[i]) diff++
            if (diff > 1) return false
        }
        return true
    }
};