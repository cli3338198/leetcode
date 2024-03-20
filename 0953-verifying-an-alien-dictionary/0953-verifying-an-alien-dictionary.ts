function isAlienSorted(words: string[], order: string): boolean {
    for (let i=0; i < words.length - 1; i++) {
        if (!isValid(words[i], words[i + 1])) return false
    }
    return true
    
    function isValid(w1: string, w2: string) {
        for (let i=0; i < w1.length; i++) {
            if (i === w2.length) return false
            if (w1[i] !== w2[i]) {
                if (order.indexOf(w1[i]) > order.indexOf(w2[i])) {
                    return false
                } else {
                    break
                }
            }
        }
        return true
    }
};