function findComplement(num: number): number {
    let res = 0
    let i = 0
    while (num > 0) {
        if ((num & 1) === 0) {
            res += 1 << i
        }
        i++
        num >>= 1
    }
    return res
};