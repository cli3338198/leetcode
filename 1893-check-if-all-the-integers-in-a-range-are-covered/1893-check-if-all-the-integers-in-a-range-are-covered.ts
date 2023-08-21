function isCovered(ranges: number[][], left: number, right: number): boolean {
    const arr: number[] = Array(52).fill(0)
    for (const [lo, hi] of ranges) {
        arr[lo]++
        arr[hi+1]--
    }
    for (let i=1, overlap=0; i <= right; i++) {
        overlap += arr[i]
        if (i >= left && overlap === 0) return false
    }
    return true
};