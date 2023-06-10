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