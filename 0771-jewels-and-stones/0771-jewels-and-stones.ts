function numJewelsInStones(jewels: string, stones: string): number {
    let count = 0
    for (const stone of stones) {
        if (jewels.includes(stone)) {
            count++
        }
    }
    return count
};