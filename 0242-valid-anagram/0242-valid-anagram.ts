function isAnagram(s: string, t: string): boolean {
    const arr: number[] = Array(26).fill(0)
    for (const c of s) {
        arr[c.charCodeAt(0)-97]++
    }
    for (const c of t) {
        arr[c.charCodeAt(0)-97]--
    }
    return arr.every(x => x === 0)
    
    return toString(splitSort(s)) === toString(splitSort(t))
};

function splitSort(s: string): string[] {
    return [...s].sort()
}

function toString(arr: string[]): string {
    return String(arr)
}