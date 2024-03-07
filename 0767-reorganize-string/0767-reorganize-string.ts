function reorganizeString(s: string): string {
    const freq: Record<string, number> = {}
    for (const char of s) {
        freq[char] = freq[char] + 1 || 1
    }
    const maxHeap: [string, number][] = []
    for (const entry of Object.entries(freq)) {
        maxHeap.push(entry)
    }
    let res = "", prev: null | [string, number] = null
    while (maxHeap.length || prev) {
        if (!maxHeap.length && prev) return ""
        maxHeap.sort((a, b) => b[1] - a[1])
        let [char, count] = maxHeap.shift()
        res += char
        count--
        if (prev) {
            maxHeap.push(prev)
            prev = null
        }
        if (count > 0) {
            prev = [char, count]
        }
    }
    return res
};