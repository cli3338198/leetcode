/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i=0; i < arr.length; i++) {
        const j = arr.indexOf(arr[i] * 2)
        if (j !== -1 && i !== j) return true
    }
    return false
};

checkIfExist = function(arr) {
    arr.sort((a, b) => a - b)
    for (let i=0; i < arr.length; i++) {
        let l = 0
        let r = arr.length-1
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            if (arr[m] === arr[i] * 2 && i !== m) {
                return true
            } else if (arr[m] > arr[i] * 2) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
    }
    return false
}

checkIfExist = function(arr) {
    const set = new Set()
    for (const n of arr) {
        if (set.has(n * 2) || set.has(n / 2)) return true
        set.add(n)
    }
    return false
}