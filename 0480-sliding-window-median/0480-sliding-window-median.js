/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function medianSlidingWindow(nums, k) {
    const res = []
    const window = nums.slice(0, k).sort((a, b) => a - b)
    res.push(getMedian(window))
    for (let i=k; i < nums.length; i++) {
        binaryInsert(window, nums[i])
        binaryDelete(window, nums[i-k])
        res.push(getMedian(window))
    }
    return res
    
    function binaryInsert(window, target) {
        let l = 0
        let r = window.length
        while (l < r) {
            const m = Math.floor((l+r)/2)
            if (target > window[m]) {
                l = m + 1
            } else {
                r = m
            }
        }
        window.splice(l, 0, target)
    }

    function binaryDelete(window, target) {
        let l = 0
        let r = window.length
        while (l < r) {
            const m = Math.floor((l+r)/2)
            if (target === window[m]) {
                window.splice(m, 1)
                break
            } else if (target > window[m]) {
                l = m + 1
            } else {
                r = m
            }
        }
    }

    function getMedian(window) {
        if (k % 2 === 1) {
            return window[Math.floor(k / 2)]
        } else {
            return (window[Math.floor(k / 2)] + window[Math.floor(k / 2) - 1]) / 2
        }
    }
};


