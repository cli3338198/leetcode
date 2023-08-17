function partitionString(s: string): number {
    const set = new Set<string>()
    let res = 0
    for (const c of s) {
        if (set.has(c)) {
            set.clear()
            res++
        }
        set.add(c)
    }
    return res + 1
};