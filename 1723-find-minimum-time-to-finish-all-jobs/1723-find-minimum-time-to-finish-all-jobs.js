/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    const n = jobs.length
    jobs.sort((a, b) => b - a)
    let res = jobs.reduce((acc, val) => acc + val, 0)
    const workers = Array(k).fill(0)
    dfs(0)
    return res
    
    function dfs(i) {
        if (i === n) {
            return res = Math.min(res, Math.max(...workers))
        }
        for (let j=0; j < k; j++) {
            if (workers[j] + jobs[i] < res) {
                workers[j] += jobs[i]
                dfs(i+1)
                workers[j] -= jobs[i]
            }
            if (workers[j] === 0) break
        }
    }
};