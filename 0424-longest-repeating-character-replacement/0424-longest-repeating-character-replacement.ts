function characterReplacement(s: string, k: number): number {
    const freq: Record<string, number> = {}
    let l = 0, max = 0, res = 0
    for (let r=0; r < s.length; r++) {
        freq[s[r]] = freq[s[r]] + 1 || 1
        max = Math.max(max, freq[s[r]])
        if (!(r-l-max+1 <= k)) {
            freq[s[l++]]--
        }
        res = r-l+1
    }
    return res
};