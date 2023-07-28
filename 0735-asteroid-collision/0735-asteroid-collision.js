/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [-1]
    for (let a of asteroids) {
        while (a < 0 && stack.at(-1) > 0) {
            const diff = stack.at(-1) + a
            if (diff > 0) {
                a = 0
            } else if (diff < 0) {
                stack.pop()
            } else {
                a = 0
                stack.pop()
            }
        }
        if (a !== 0) {
            stack.push(a)
        }
    }
    return stack.slice(1)
};