/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    for (const str of strs) {
        const key = str.split("").sort().join("")
        map[key] = [...map[key] || [], str] 
    }
    return Object.values(map)
};