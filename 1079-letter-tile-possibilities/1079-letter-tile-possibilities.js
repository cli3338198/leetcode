/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    tiles = tiles.split("").sort((a, b) => a - b)
    const res = []
    helper("", Array(tiles.length).fill(0))
    return Array.from(new Set(res)).length
    
    function helper(cur, used) {
        if (cur.length) res.push(cur)
        if (cur.length === tiles.length) return
        for (let i=0; i < tiles.length; i++) {
            if (!used[i]) {
                used[i] = true
                helper(cur + tiles[i], used)
                used[i] = false
            }
        }
    }
};