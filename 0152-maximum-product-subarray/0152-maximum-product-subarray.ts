function maxProduct(prefix: number[]): number {
    const n = prefix.length
    const suffix = prefix.slice().reverse()
    for (let i=1; i < n; i++) {
        prefix[i] *= prefix[i-1] || 1
        suffix[i] *= suffix[i-1] || 1
    }
    return Math.max(...prefix, ...suffix)
};