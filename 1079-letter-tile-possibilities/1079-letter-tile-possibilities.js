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

numTilePossibilities = function(tiles) {
    const map = new Map()
    for (const tile of tiles) {
        map.set(tile, map.get(tile)  + 1 || 1)
    }
    return helper([0])
    
    function helper(count) {
        for (const [tile, cnt] of map) {
            if (cnt > 0) {
                map.set(tile, map.get(tile) - 1)
                count[0]++
                helper(count)
                map.set(tile, map.get(tile) + 1)
            }
        }
        return count[0]
    }
}

numTilePossibilities = function(tiles) {
    const map = {}
    for (const tile of tiles) {
        map[tile] = map[tile] + 1 || 1
    }
    let res = 0
    helper()
    return res
    
    function helper() {
        for (const [tile, count] of Object.entries(map)) {
            if (count > 0) {
                map[tile]--
                res++
                helper()
                map[tile]++
            }
        }
    }
}