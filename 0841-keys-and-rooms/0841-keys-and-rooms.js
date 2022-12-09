/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length
    const set = new Set()
    dfs(0)
    return set.size === n
    
    function dfs(room) {
        if (set.has(room)) return
        set.add(room)
        for (const next of rooms[room]) {
            dfs(next)
        }
    }
};