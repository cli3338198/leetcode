function partitionLabels(s: string): number[] {
    const map: Record<string, number> = {}
    for (let i=0; i < s.length; i++) {
        map[s[i]] = i
    }
    const res: number[] = []
    let start = 0
    let end = 0
    for (let i=0; i < s.length; i++) {
        end = Math.max(end, map[s[i]])
        if (i === end) {
            res.push(end - start + 1)
            start = i + 1
        }
    }
    return res
};