/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const prefixes = [0]
    for (let i=1; i <= n; i++) {
        prefixes.push(prefixes[i-1] + i)
    }
    for (let i=0; i < prefixes.length; i++) {
        if (prefixes[i+1] === prefixes[n] - prefixes[i]) return i + 1
    }
    return -1
};