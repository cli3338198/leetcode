/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    if (!words.includes(target)) return -1
    const graph = {}
    const reverseGraph = {}
    for (let i=0; i < words.length; i++) {
        graph[i] = (i + 1) % words.length
        reverseGraph[(i + 1) % words.length] = i
    }
    return Math.min(dfs(startIndex, graph), dfs(startIndex, reverseGraph))
    
    function dfs(i, graph) {
        if (words[i] === target) return 0
        return 1 + dfs(graph[i], graph)
    }
};

closetTarget = function(words, target, startIndex) {
    let res = Infinity
    for (let i=0; i < words.length; i++) {
        if (words[i] === target) {
            const forward = Math.abs(startIndex - i)
            const backward = words.length - forward
            res = Math.min(res, forward, backward)
        }
    }
    return res === Infinity ? -1 : res
}