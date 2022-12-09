function reconstructQueue(people: number[][]): number[][] {
    people.sort(([a,c], [b,d]) => b - a || c - d)
    const res: number[][] = []
    people.forEach(([p, i]) => res.splice(i, 0, [p, i]))
    return res
};