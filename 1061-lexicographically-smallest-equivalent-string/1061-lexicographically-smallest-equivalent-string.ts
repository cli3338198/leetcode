class UF {
    private root: Record<string, string>
    constructor() {
        this.root = {}
    }
    add(char: string): void {
        if (!(char in this.root)) {
            this.root[char] = char
        }
    }
    find(char: string): string {
        this.add(char)
        if (this.root[char] !== char) {
            this.root[char] = this.find(this.root[char])
        }
        return this.root[char]
    }
    union(charA: string, charB: string): void {
        const rootA = this.find(charA)
        const rootB = this.find(charB)
        if (rootA !== rootB) {
            const [lesser, greater] = [rootA, rootB].sort()
            this.root[greater] = lesser
        }
    }
}

function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const uf = new UF()
    for (let i=0; i < s1.length; i++) {
        uf.union(s1[i], s2[i])
    }
    return baseStr.split("").reduce((acc, char) => acc + uf.find(char), "")
};