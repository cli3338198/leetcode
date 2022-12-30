function isSubsequence(s: string, t: string): boolean {
    let a = 0
    for (const c of t) {
        if (s[a] === c) a++
    }
    return a === s.length
};