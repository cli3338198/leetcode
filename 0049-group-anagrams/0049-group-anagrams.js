/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    for (const str of strs) {
        const ana = str.split("").sort().join("")
        if (ana in map) {
            map[ana].push(str)
        } else {
            map[ana] = [str]
        }
    }
    const res = []
    for (const ana in map) {
        res.push(map[ana])
    }
    return res
};