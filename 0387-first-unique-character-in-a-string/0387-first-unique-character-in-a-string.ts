function firstUniqChar(s: string): number {
    const map: Record<string, number> = {}
    for (const c of s) {
        map[c] = map[c] + 1 || 1
    }
    for (let i=0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i
        }
    }
    return -1
};