/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let lo = 0
    let hi = totalTrips * Math.min(...time)
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2)
        const total = calculateTotalTrips(mid)
        if (total < totalTrips) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return lo
    
    function calculateTotalTrips(mid) {
        return time.reduce((acc, val) => acc + Math.floor(mid / val), 0)
    }
};