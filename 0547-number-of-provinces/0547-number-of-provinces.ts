function findCircleNum(cities: number[][]): number {
    const n = cities.length
    let res = 0
    for (let i=0; i < n; i++) {
        if (cities[i][i] === 1) {
            res++
            dfs(i)
        }
    }
    return res
    
    function dfs(i) {
        if (cities[i][i] === 0) return
        for (let j=0; j < n; j++) {
            if (cities[i][j] === 1) {
                cities[i][j] = 0
                dfs(j)
            }
        }
    }
};