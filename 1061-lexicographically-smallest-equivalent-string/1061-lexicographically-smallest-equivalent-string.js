/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    class UF {
        constructor() {
            this.root = {}
        }
        add(char) {
            if (!(char in this.root)) {
                this.root[char] = char
            }
        }
        find(char) {
            this.add(char)
            if (this.root[char] !== char) {
                this.root[char] = this.find(this.root[char])
            }
            return this.root[char]
        }
        union(charA, charB) {
            const rootA = this.find(charA)
            const rootB = this.find(charB)
            if (rootA !== rootB) {
                if (rootA < rootB) {
                    this.root[rootB] = rootA
                } else {
                    this.root[rootA] = rootB
                }
            }
        }
    }
    
    const uf = new UF()
    for (let i=0; i < s1.length; i++) {
        uf.union(s1[i], s2[i])
    }
    return baseStr.split("").map(char => uf.find(char)).join("")
};

smallestEquivalentString = function(s1, s2, baseStr) {
    const graph = {}
    for (let i=0; i < s1.length; i++) {
        graph[s1[i]] = graph[s1[i]] || []
        graph[s2[i]] = graph[s2[i]] || []
        graph[s1[i]].push(s2[i])
        graph[s2[i]].push(s1[i])
    }
    return baseStr.split("").reduce((acc, char) => acc + dfs(char, new Set()), "")
    
    function dfs(char, set) {
        let min = char
        if (!set.has(char)) {
            set.add(char)
            for (const next of graph[char] || []) {
                const [lesser] = [dfs(next, set), min].sort()
                min = lesser
            }
        }
        return min
    }
}