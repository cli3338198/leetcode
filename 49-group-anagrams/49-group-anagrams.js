/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    for (let str of strs) {
        const key = JSON.stringify(str.split("").sort())
        map[key] ? map[key].push(str) : map[key] = [str]
    }
    return Object.values(map)
};