/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    return gain.reduce(reducer, [0, 0])[1]
    
    function reducer(acc, val) {
        const [ht, mx] = acc
        return [ht + val, Math.max(mx, ht + val)]
    }
};