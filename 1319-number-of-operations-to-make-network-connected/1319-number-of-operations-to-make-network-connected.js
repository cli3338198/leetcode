/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    class UF {
        constructor() {
            this.root = {}
            this.size = {}
            this.components = 0
        }
        add(computer) {
            if (!(computer in this.root)) {
                this.root[computer] = computer
                this.size[computer] = 1
                this.components++
            }
        }
        find(computer) {
            if (this.root[computer] !== computer) {
                this.root[computer] = this.find(this.root[computer])
            }
            return this.root[computer]
        }
        union(computer1, computer2) {
            const root1 = this.find(computer1)
            const root2 = this.find(computer2)
            if (root1 === root2) return
            const [greater, smaller] = [root1, root2].sort((r1, r2) => this.size[r2] - this.size[r1])
            this.root[smaller] = greater
            this.size[greater] += this.size[smaller]
            this.components--
        }
    }
    
    if (connections.length < n-1) return -1
    const uf = new UF()
    for (let i=0; i < n; i++) {
        uf.add(i)
    }
    for (const [u, v] of connections) {
        uf.union(u, v)
    }
    return uf.components - 1
};