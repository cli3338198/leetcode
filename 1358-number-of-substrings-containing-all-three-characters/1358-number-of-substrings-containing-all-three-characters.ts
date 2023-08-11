function numberOfSubstrings(s: string): number {
    const map: Record<string, number> = {}
    for (const c of 'abc') map[c] = 0
    let l = 0
    let res = 0
    for (let r=0; r < s.length; r++) {
        map[s[r]]++
        while (map['a'] > 0 && map['b'] > 0 && map['c'] > 0) {
            map[s[l]]--
            l++
        }
        res += l
    }
    return res
};