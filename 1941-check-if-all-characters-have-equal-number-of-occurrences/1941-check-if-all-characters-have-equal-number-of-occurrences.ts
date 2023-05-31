function areOccurrencesEqual(s: string): boolean {
    const abc: number[] = Array(26).fill(0)
    for (const c of s) {
        abc[c.charCodeAt(0) - 97] = abc[c.charCodeAt(0) - 97] + 1 || 1
    }
    let cnt = null
    for (const c of abc) {
        if (c !== 0) {
            if (!cnt) {
                cnt = c
            } else if (cnt !== c) {
                return false
            }
        }
    }
    return true
};