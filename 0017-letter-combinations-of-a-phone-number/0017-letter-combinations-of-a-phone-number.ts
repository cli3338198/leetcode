function letterCombinations(digits: string): string[] {
    const map: Record<string, string> = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
    if (digits.length == 0) return []
    let combos: string[] = [""]
    for (const digit of digits) {
        const newCombos: string[] = []
        for (const combo of combos) {
            for (const char of map[digit]) {
                newCombos.push(combo + char)
            }
        }
        combos = newCombos
    }
    return combos
};