function thirdMax(nums: number[]): number {
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity
    for (const n of nums) {
        if (n > first) {
            third = second
            second = first
            first = n
        } else if (n > second && n !== first) {
            third = second
            second = n
        } else if (n > third && n !== second && n !== first) {
            third = n
        }
    }   
    if (third !== -Infinity) {
        return third
    } else {
        return first
    }
};