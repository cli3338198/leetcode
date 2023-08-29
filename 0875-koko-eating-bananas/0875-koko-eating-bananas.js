/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1, max = -Infinity
    for (const pile of piles) {
        max = Math.max(max, pile)
    }
    while (min < max) {
        const m = Math.floor((min+max)/2)
        if (canEat(m)) {
            max = m
        } else {
            min = m + 1
        }
    }
    return min
    
    function canEat(speed) {
        let hour = 0
        for (const pile of piles) {
            hour += Math.ceil(pile/speed)
        }
        return hour <= h
    }
};