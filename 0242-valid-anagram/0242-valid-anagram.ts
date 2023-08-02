function isAnagram(s: string, t: string): boolean {
    const arr: number[] = Array(26).fill(0)
    for (const c of s) {
        arr[c.charCodeAt(0)-97]++
    }
    for (const c of t) {
        arr[c.charCodeAt(0)-97]--
    }
    for (const cnt of arr) {
        if (cnt !== 0) return false
    }
    return true
    
    return toString(splitSort(s)) === toString(splitSort(t))
};

function splitSort(s: string): string[] {
    return [...s].sort()
}

function toString(arr: string[]): string {
    return String(arr)
}