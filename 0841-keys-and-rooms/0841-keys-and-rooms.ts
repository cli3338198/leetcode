function canVisitAllRooms(rooms: number[][]): boolean {
    const n = rooms.length
    const q: number[] = [0]
    const set = new Set()
    while (q.length) {
        const r = q.shift()
        if (set.has(r)) continue
        set.add(r)
        for (const next of rooms[r]) {
            q.push(next)
        }
    }
    return set.size === n
};