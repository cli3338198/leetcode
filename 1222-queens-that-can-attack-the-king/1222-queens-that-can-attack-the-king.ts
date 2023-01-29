function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    const res: number[][] = []
    const set = new Set<string>(queens.map(([x, y]) => `${x} ${y}`))
    for (const x of [-1, 0, 1]) {
        for (const y of [-1, 0, 1]) {
            for (let i=1; i < 8; i++) {
                const xK = king[0] + (x * i)
                const yK = king[1] + (y * i)
                if (set.has(`${xK} ${yK}`)) {
                    res.push([xK, yK])
                    break
                }
            }
        }
    }
    return res
};