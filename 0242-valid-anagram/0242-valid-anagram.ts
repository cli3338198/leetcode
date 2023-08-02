function isAnagram(s: string, t: string): boolean {
    return toString(splitSort(s)) === toString(splitSort(t))
};

function splitSort(s: string): string[] {
    return [...s].sort()
}

function toString(arr: string[]): string {
    return String(arr)
}