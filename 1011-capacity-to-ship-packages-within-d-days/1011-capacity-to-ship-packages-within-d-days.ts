function shipWithinDays(weights: number[], days: number): number {
    let maxWeight = 0, totalWeight = 0
    for (const weight of weights) {
        maxWeight = Math.max(maxWeight, weight)
        totalWeight += weight
    }
    while (maxWeight < totalWeight) {
        const curWeight = Math.floor((maxWeight+totalWeight)/2)
        let daysToShip = 1
        let weight = 0
        for (const packageWeight of weights) {
            weight += packageWeight
            if (weight > curWeight) {
                daysToShip++
                weight = packageWeight
            }
        }
        const canShip = daysToShip <= days
        if (canShip) {
            totalWeight = curWeight
        } else {
            maxWeight = curWeight + 1
        }
    }
    return maxWeight
};