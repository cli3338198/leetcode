function numberOfSubstrings(s: string): number {
    const arr: [number, number, number] = [-1, -1, -1]
    let ans = 0
    for (let i=0; i < s.length; i++) {
        arr[s[i].charCodeAt(0)-97] = i
        ans += 1 + Math.min(...arr)
    }
    return ans
    
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