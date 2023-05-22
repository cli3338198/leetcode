/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const set = new Set()
    for (const c of s) {
        if (set.has(c)) return c
        set.add(c)
    }
};