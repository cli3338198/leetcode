function lengthOfLongestSubstring(s: string): number {
    const cnt: Record<string, number> = {}
    let left = 0
    let res = 0
    for (let right=left; right < s.length; right++) {
        cnt[s[right]] = cnt[s[right]] + 1 || 1
        while (left < right && cnt[s[right]] > 1) {
            cnt[s[left++]]--
        }
        res = Math.max(res, right-left+1)
    }
    return res
};