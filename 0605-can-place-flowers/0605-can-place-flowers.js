/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true
    let arr = flowerbed.slice()
    let total = n
    for (let i=0; i < flowerbed.length; i++) {
        if (arr[i] === 0 && canPlace(arr, i)) {
            arr[i] = 1
            total--
        }
        if (total === 0) return true
    }
    arr = flowerbed.slice()
    total = n
    for (let i=flowerbed.length-1; i >= 0; i--) {
        if (arr[i] === 0 && canPlace(arr, i)) {
            arr[i] = 1
            total--
        }
        if (total === 0) return true
    }
    return false
    
    function canPlace(arr, i) {
        return ((arr[i-1] === undefined || arr[i-1] === 0) && (arr[i+1] === undefined || arr[i+1] === 0))
    }
};