/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const baskets = {}
    let qtyBaskets = 0
    let l = 0
    let res = 0
    let cur = 0
    for (let r=0; r < fruits.length; r++) {
        if (!(fruits[r] in baskets)) qtyBaskets++
        baskets[fruits[r]] = baskets[fruits[r]] + 1 || 1
        cur++
        while (l < r && qtyBaskets > 2) {
            baskets[fruits[l]]--
            cur--
            if (baskets[fruits[l]] === 0) {
                qtyBaskets--
                delete baskets[fruits[l]]
            }
            l++
        }
        res = Math.max(res, cur)
    }
    return res
};