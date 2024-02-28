function thirdMax(nums: number[]): number {
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity
    for (const n of nums) {
        if (n === first || n === second || n === third) {
            continue
        }
        if (n > first) {
            third = second
            second = first
            first = n
        } else if (n > second) {
            third = second
            second = n
        } else if (n > third) {
            third = n
        }
    }   
    if (third !== -Infinity) {
        return third
    } else {
        return first
    }
};