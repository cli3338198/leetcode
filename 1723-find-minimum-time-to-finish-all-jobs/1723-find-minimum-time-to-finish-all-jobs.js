/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    const n = jobs.length
    jobs.sort((a, b) => b - a)
    let l = Math.max(...jobs)
    let r = jobs.reduce((acc, val) => acc + val, 0)
    while (l < r) {
        const m = Math.floor((l+r)/2)
        const cap = Array(k).fill(m)
        if (dfs(cap, 0)) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
    
    function dfs(cap, i) {
        if (i === n) return true
        for (let j=0; j < k; j++) {
            if (jobs[i] <= cap[j]) {
                cap[j] -= jobs[i]
                if (dfs(cap, i+1)) return true
                cap[j] += jobs[i]
            }
        }
        return false
    }
};