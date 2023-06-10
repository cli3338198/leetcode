/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = {}
    for (let i=0; i < arr2.length; i++) {
        map[arr2[i]] = i
    }
    arr1.sort((a, b) => {
        if (a in map && b in map) {
            if (map[a] < map[b]) {
                return -1
            } else {
                return 1
            }
        }
        if (a in map) return -1
        if (b in map) return 1
        return a - b
    })
    return arr1
};

relativeSortArray = function(arr1, arr2) {
    const map = {}
    for (let i=0; i < arr2.length; i++) {
        map[arr2[i]] = i
    }
    return mergeSort(arr1)
    
    function mergeSort(arr) {
        if (arr.length <= 1) return arr
        const mid = Math.floor(arr.length/2)
        const left = mergeSort(arr.slice(0, mid))
        const right = mergeSort(arr.slice(mid))
        return merge(left, right)
    }
    
    function merge(a, b) {
        const res = []
        let i=0, j=0
        while (i < a.length && j < b.length) {
            if (a[i] in map && b[j] in map) {
                if (map[a[i]] < map[b[j]]) {
                    res.push(a[i++])
                } else {
                    res.push(b[j++])
                }
            } else if (a[i] in map) {
                res.push(a[i++])
            } else if (b[j] in map) {
                res.push(b[j++])
            } else if (a[i] < b[j]) {
                res.push(a[i++])
            } else {
                res.push(b[j++])
            }
        }
        for (i; i < a.length; i++) res.push(a[i])
        for (j; j < b.length; j++) res.push(b[j])
        return res
    }
}