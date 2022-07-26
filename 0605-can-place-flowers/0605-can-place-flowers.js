/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true
    let arr = flowerbed.slice()
    for (let i=0; i < flowerbed.length; i++) {
        if (arr[i] === 0 && canPlace(arr, i)) {
            arr[i] = 1
            n--
        }
    }
    return n <= 0
    
    function canPlace(arr, i) {
        return ((arr[i-1] === undefined || arr[i-1] === 0) && (arr[i+1] === undefined || arr[i+1] === 0))
    }
};