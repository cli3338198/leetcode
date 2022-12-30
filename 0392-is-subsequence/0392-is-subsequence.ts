function isSubsequence(s: string, t: string): boolean {
    let a = 0
    let b = 0
    while (b < t.length) {
        if (s[a] === t[b]) {
            a++
        }
        b++
    }
    return a === s.length
};