function findTheDifference(s: string, t: string): string {
    let res = 0
    for (let i=0; i < s.length; i++) {
        res ^= s.charCodeAt(i)
        res ^= t.charCodeAt(i)
    }
    res ^= t.charCodeAt(t.length-1)
    return String.fromCharCode(res)
};