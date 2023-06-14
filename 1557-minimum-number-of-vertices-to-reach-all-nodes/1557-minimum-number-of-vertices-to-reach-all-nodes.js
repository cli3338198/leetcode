/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const nodes = new Set(Array(n).fill(0).map((_,i) => i))
    for (const [, v] of edges) {
        nodes.delete(v)
    }
    return Array.from(nodes)
};