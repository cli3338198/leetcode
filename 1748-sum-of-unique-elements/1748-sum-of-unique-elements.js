/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return Object.entries(nums.reduce((acc, n) => ({...acc, [n]: acc[n] + 1 || 1}), {})).filter(([,cnt]) => cnt === 1).reduce((acc, [n]) => acc + +n, 0)
};

sumOfUnique = function(nums) {
    const yes = new Set()
    const no = new Set()
    for (const n of nums) {
        if (no.has(n)) {
            continue
        } else if (yes.has(n)) {
            yes.delete(n)
            no.add(n)
        } else {
            yes.add(n)
        }
    }
    return Array.from(yes).reduce((acc, val) => acc + val, 0)
}