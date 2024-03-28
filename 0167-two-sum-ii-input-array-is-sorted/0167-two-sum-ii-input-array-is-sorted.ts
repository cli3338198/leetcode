function twoSum(numbers: number[], target: number): number[] {
    for (let i=0; i < numbers.length; i++) {
        const complement = target - numbers[i]
        let left = i + 1, right = numbers.length - 1
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (numbers[mid] === complement) {
                return [i + 1, mid + 1]
            } else if (numbers[mid] > complement) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    
    //
    
    let l = 0, r = numbers.length - 1
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        if (sum === target) {
            return [l + 1, r + 1]
        } else if (sum > target) {
            r--
        } else {
            l++
        }
    }
};