function findMatrix(nums: number[]): number[][] {
    const map: Record<string, number> = {}
    const res: number[][] = []
    for (const n of nums) {
        map[n] = map[n] + 1 || 1
    }
    const max = Math.max(...Object.values(map))
    for (let i=0; i < max; i++) {
        const subres: number[] = []
        for (const n in map) {
            if (map[n] > 0) {
                map[n]--
                subres.push(+n)
            }
        }
        res.push(subres)
    }
    return res
};