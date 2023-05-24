function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    const map: Record<string, number> = {}
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i=0; i < abc.length; i++) {
        map[abc[i]] = i
    }
    let s1 = 0
    let s2 = 0
    let s3 = 0
    for (const c of firstWord) {
        s1 += map[c]
        s1 *= 10
    }
    for (const c of secondWord) {
        s2 += map[c]
        s2 *= 10
    }
    for (const c of targetWord) {
        s3 += map[c]
        s3 *= 10
    }
    return s1 + s2 === s3
};