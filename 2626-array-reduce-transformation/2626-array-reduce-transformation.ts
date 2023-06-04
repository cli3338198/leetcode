type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    for (const n of nums) {
        init = fn(init, n)
    }
    return init
};