/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let minWt = 0, maxWt = 0
    for (const wt of weights) {
        minWt = Math.max(minWt, wt)
        maxWt += wt
    }
    while (minWt < maxWt) {
        const curWt = Math.floor((minWt+maxWt)/2)
        if (canShip(curWt)) {
            maxWt = curWt
        } else {
            minWt = curWt + 1
        }
    }
    return minWt
    
    function canShip(curWt) {
        let day = 1, wt = 0
        for (const w of weights) {
            wt += w
            if (wt > curWt) {
                wt = w
                day++
            } 
        }
        return day <= days
    }
};