/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length-1
    const res = []
    helper(0, [0])
    return res
    
    function helper(src, list) {
        if (src === target) {
            return res.push(list.slice())
        }
        for (const next of graph[src]) {
            helper(next, [...list, next])
        }
    }
};