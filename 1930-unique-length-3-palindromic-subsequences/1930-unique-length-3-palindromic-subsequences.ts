function countPalindromicSubsequence(s: string): number {
    const first: number[] = Array(26).fill(Infinity)
    const last: number[] = Array(26).fill(Infinity)
    for (let i=0; i < s.length; i++) {
        const c = s[i]
        const idx = c.charCodeAt(0)-97
        first[idx] = Math.min(first[idx], i)
        last[idx] = i
    }
    const set = new Set<string>()
    let res = 0
    for (let i=0; i < 26; i++) {
        if (first[i] !== last[i]) {
            set.clear()
            for (let j=first[i]+1; j < last[i]; j++) {
                set.add(s[j])
            }
            res += set.size
        }
    }
    return res
};