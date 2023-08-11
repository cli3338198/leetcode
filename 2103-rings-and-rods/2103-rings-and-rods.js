/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const map = {}
    for (let i=0; i < rings.length; i += 2) {
        const color = rings[i], ring = rings[i+1]
        map[ring] = map[ring] || new Set()
        map[ring].add(color)
    }
    let res = 0
    for (const key in map) {
        if (map[key].size === 3) res++
    }
    return res
};