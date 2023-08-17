/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const outgoing = new Set(), cities = new Set()
    for (const [a, b] of paths) {
        cities.add(a)
        cities.add(b)
        outgoing.add(a)
    }
    return Array.from(cities).filter(city => !outgoing.has(city))[0]
};