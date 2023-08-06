class UF {
    private root: Record<string, string>
    constructor() {
        this.root = {}
    }
    add(a: string): void {
        if (!(a in this.root)) {
            this.root[a] = a
        }
    }
    find(a: string): string {
        if (this.root[a] !== a) {
            this.root[a] = this.find(this.root[a])
        }
        return this.root[a]
    }
    union(a: string, b: string): boolean {
        const rA = this.find(a)
        const rB = this.find(b)
        if (rA === rB) return false
        this.root[rB] = rA
        return true
    }
}

function containsCycle(grid: string[][]): boolean {
    const uf = new UF()
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            uf.add(coordToKey(r, c))
            for (const [rr, cc] of [[1, 0], [0, 1]]) {
                const rrr = rr + r
                const ccc = cc + c
                if (!(rrr in grid) || !(ccc in grid[rrr]) || grid[rrr][ccc] !== grid[r][c]) continue
                uf.add(coordToKey(rrr, ccc))
                if (uf.union(coordToKey(r, c), coordToKey(rrr, ccc)) === false) return true
            }
        }
    }
    return false
};

function coordToKey(r, c): string {
    return `${r} ${c}`
}