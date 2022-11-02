/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = 0
    let y = 0
    let direction = 'north'
    for (const inst of instructions) {
        if (inst === 'G') {
            if (direction === 'north') {
                y++
            } else if (direction === 'south') {
                y--
            } else if (direction === 'west') {
                x--
            } else if (direction === 'east') {
                x++
            }
        } else if (inst === 'L') {
            if (direction === 'north') {
                direction = 'west'
            } else if (direction === 'south') {
                direction = 'east'
            } else if (direction === 'west') {
                direction = 'south'
            } else if (direction === 'east') {
                direction = 'north'
            }
        } else if (inst === 'R') {
            if (direction === 'north') {
                direction = 'east'
            } else if (direction === 'south') {
                direction = 'west'
            } else if (direction === 'west') {
                direction = 'north'
            } else if (direction === 'east') {
                direction = 'south'
            }
        }
    }
    if (x === 0 && y === 0) return true
    if (direction === 'north') return false
    return true
};
